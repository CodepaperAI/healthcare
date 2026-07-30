'use client';

import { useState } from 'react';
import Icon from '@/components/ui/Icon';
import { site } from '@/data/site';
import { enquiryOptions } from '@/data/services';
import { cn } from '@/lib/utils';

/**
 * Call-back request form.
 *
 * NO BACKEND IS WIRED UP. On submit this composes a pre-filled email to the
 * clinic inbox and hands it to the visitor's mail client, which works on a
 * purely static deployment. To capture submissions server-side instead, replace
 * `submitRequest` with a fetch() to your own API route or form service — the
 * markup, validation and success state need no changes.
 */

const initialValues = { name: '', phone: '', service: '', preferred: '' };

const fieldClasses =
  'h-12 w-full rounded-xl border border-line bg-canvas px-4 text-[0.94rem] text-strong ' +
  'placeholder:text-muted/70 transition-colors duration-200 focus:border-brand-600 ' +
  'focus:outline-none focus:ring-2 focus:ring-brand-600/25';

export default function CallbackForm({ tone = 'card' }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field) => (event) => {
    setValues((current) => ({ ...current, [field]: event.target.value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!values.name.trim()) next.name = 'Please enter your name.';
    // Accepts spaces, dashes, brackets and an optional country code.
    if (!/^[\d\s()+-]{7,}$/.test(values.phone.trim())) {
      next.phone = 'Please enter a phone number we can reach you on.';
    }
    if (!values.service) next.service = 'Please choose a service.';
    return next;
  };

  const submitRequest = (event) => {
    event.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length) return;

    const body = [
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
      `Service: ${values.service}`,
      values.preferred ? `Preferred day/time: ${values.preferred}` : null,
    ]
      .filter(Boolean)
      .join('\n');

    window.location.href = `${site.emailHref}?subject=${encodeURIComponent(
      'Call-back request',
    )}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
    setValues(initialValues);
  };

  const wrapper =
    tone === 'card'
      ? 'rounded-panel border border-line bg-elevated p-6 sm:p-8'
      : 'rounded-panel border border-white/15 bg-white/[0.06] p-6 backdrop-blur-md sm:p-8';

  const labelTone = tone === 'card' ? 'text-strong' : 'text-white';
  const helpTone = tone === 'card' ? 'text-muted' : 'text-white/60';

  if (submitted) {
    return (
      <div className={wrapper} role="status" aria-live="polite">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-teal-500/14 text-teal-600 dark:text-teal-400">
          <Icon name="check" className="h-6 w-6" />
        </span>
        <h3 className={cn('mt-5 font-display text-[1.15rem] font-bold', labelTone)}>
          Thank you — your request is ready to send
        </h3>
        <p className={cn('mt-2.5 text-[0.92rem] leading-relaxed', helpTone)}>
          Your email app should have opened with the details filled in. Send it and the front desk
          will call you during clinic hours to confirm. In a hurry? Call {site.phone}.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-5 text-[0.86rem] font-semibold text-brand-600 underline decoration-brand-600/30 underline-offset-4"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submitRequest} noValidate className={wrapper}>
      <h3 className={cn('font-display text-[1.15rem] font-bold', labelTone)}>Request a call-back</h3>
      <p className={cn('mt-2 text-[0.88rem] leading-relaxed', helpTone)}>
        Leave your details and we’ll call you during clinic hours to confirm availability.
      </p>

      <div className="mt-6 flex flex-col gap-4">
        <div>
          <label htmlFor="cb-name" className={cn('mb-1.5 block text-[0.84rem] font-semibold', labelTone)}>
            Name <span className="text-brand-600">*</span>
          </label>
          <input
            id="cb-name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={update('name')}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'cb-name-error' : undefined}
            className={cn(fieldClasses, errors.name && 'border-red-500 focus:border-red-500')}
            placeholder="Your full name"
          />
          {errors.name && (
            <p id="cb-name-error" className="mt-1.5 text-[0.8rem] font-medium text-red-500">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="cb-phone" className={cn('mb-1.5 block text-[0.84rem] font-semibold', labelTone)}>
            Phone <span className="text-brand-600">*</span>
          </label>
          <input
            id="cb-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={update('phone')}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'cb-phone-error' : undefined}
            className={cn(fieldClasses, errors.phone && 'border-red-500 focus:border-red-500')}
            placeholder="226-000-0000"
          />
          {errors.phone && (
            <p id="cb-phone-error" className="mt-1.5 text-[0.8rem] font-medium text-red-500">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="cb-service" className={cn('mb-1.5 block text-[0.84rem] font-semibold', labelTone)}>
            Service <span className="text-brand-600">*</span>
          </label>
          <select
            id="cb-service"
            name="service"
            value={values.service}
            onChange={update('service')}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? 'cb-service-error' : undefined}
            className={cn(fieldClasses, errors.service && 'border-red-500 focus:border-red-500')}
          >
            <option value="">Choose a service</option>
            {enquiryOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.service && (
            <p id="cb-service-error" className="mt-1.5 text-[0.8rem] font-medium text-red-500">
              {errors.service}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="cb-preferred"
            className={cn('mb-1.5 block text-[0.84rem] font-semibold', labelTone)}
          >
            Preferred day / time{' '}
            <span className={cn('font-normal', helpTone)}>(optional)</span>
          </label>
          <input
            id="cb-preferred"
            name="preferred"
            type="text"
            value={values.preferred}
            onChange={update('preferred')}
            className={fieldClasses}
            placeholder="e.g. Thursday afternoon"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brand-600 text-[0.94rem] font-semibold text-white transition-all duration-300 ease-premium hover:bg-brand-700 hover:shadow-lift"
      >
        Request call-back
        <Icon name="arrowRight" className="h-4 w-4" />
      </button>

      <p className={cn('mt-4 flex items-start gap-2 text-[0.78rem] leading-relaxed', helpTone)}>
        <Icon name="shield" className="mt-0.5 h-3.5 w-3.5 shrink-0" />
        Your information is confidential. We’ll call to confirm availability.
      </p>
    </form>
  );
}
