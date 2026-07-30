/**
 * Renders one or more JSON-LD graphs. Nulls are filtered so callers can pass
 * conditional schema (e.g. faqSchema(...) which returns null when empty).
 */
export default function Schema({ data }) {
  const graphs = (Array.isArray(data) ? data : [data]).filter(Boolean);
  if (!graphs.length) return null;

  return (
    <>
      {graphs.map((graph, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
        />
      ))}
    </>
  );
}
