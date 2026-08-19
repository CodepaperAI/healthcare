const UPLIFT_API_URL = 'https://api.upliftai.co/api/public/v1';

class UpliftApiError extends Error {
  constructor(status, message) {
    super(message);
    this.name = 'UpliftApiError';
    this.status = status;
  }
}

function getToken() {
  return process.env.UPLIFT_API_TOKEN;
}

async function upliftRequest(path, searchParams) {
  const token = getToken();
  if (!token) return null;

  const query = new URLSearchParams(searchParams).toString();
  const response = await fetch(`${UPLIFT_API_URL}${path}${query ? `?${query}` : ''}`, {
    headers: { Authorization: `Bearer ${token}` },
    next: { revalidate: 300 },
  });

  if (!response.ok) {
    if (response.status === 404) return null;
    throw new UpliftApiError(response.status, `Uplift API request failed with status ${response.status}`);
  }

  const payload = await response.json();
  if (!payload.success) throw new Error(payload.error || 'Uplift API request failed');
  return payload.data;
}

export async function getBlogs({ page = 1, limit = 12, status = 'PUBLISH' } = {}) {
  try {
    return await upliftRequest('/blogs', {
      page: String(page),
      limit: String(limit),
      status,
    });
  } catch (error) {
    if (error?.status !== 401) console.error(error);
    return { blogs: [], pagination: null, error: error?.status === 401 ? 'invalid-token' : 'request-failed' };
  }
}

export async function getBlog(slug) {
  try {
    const data = await upliftRequest(`/blog/${encodeURIComponent(slug)}`, {});
    return data?.blog || null;
  } catch (error) {
    if (error?.status !== 401) console.error(error);
    return null;
  }
}

export function hasUpliftConfig() {
  return Boolean(getToken());
}