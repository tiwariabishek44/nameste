const services = [
  "Massage Therapy",
  "Head Spa Ritual",
  "Ayurveda & Shirodhara",
  "Skin & Aesthetics",
  "Body Contouring",
  "Qi Beauty",
  "Something else",
];

export default function BookingForm({ heading = "Request your appointment" }: { heading?: string }) {
  return (
    <form className="bg-surface text-ink rounded-[var(--radius-card)] p-7 md:p-8 border border-line">
      <h3 className="font-[family-name:var(--font-display)] text-2xl mb-6">{heading}</h3>

      <Field id="name" label="Name" type="text" autoComplete="name" required />
      <Field id="email" label="Email" type="email" autoComplete="email" required hint="We'll confirm your booking here." />
      <Field id="phone" label="Phone" type="tel" autoComplete="tel" />

      <div className="mb-5">
        <label htmlFor="service" className="block text-sm font-semibold mb-1.5">What are you interested in?</label>
        <select id="service" name="service" className="w-full rounded-lg border border-line bg-base px-4 py-3 text-base focus:outline-none focus:border-sage focus:ring-2 focus:ring-sage/30">
          {services.map((s) => <option key={s}>{s}</option>)}
        </select>
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-semibold mb-1.5">
          Anything we should know? <span className="text-muted font-normal">(optional)</span>
        </label>
        <textarea id="message" name="message" rows={3} className="w-full rounded-lg border border-line bg-base px-4 py-3 text-base focus:outline-none focus:border-sage focus:ring-2 focus:ring-sage/30" />
      </div>

      <button type="submit" className="btn btn--primary btn--block">Book your peace</button>
      <p className="mt-3 text-xs text-muted text-center">We&rsquo;ll reply within one business day to confirm your time.</p>
    </form>
  );
}

function Field({
  id, label, type, autoComplete, required, hint,
}: {
  id: string; label: string; type: string; autoComplete?: string; required?: boolean; hint?: string;
}) {
  return (
    <div className="mb-5">
      <label htmlFor={id} className="block text-sm font-semibold mb-1.5">
        {label}{required && <span className="text-error"> *</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="w-full rounded-lg border border-line bg-base px-4 py-3 text-base focus:outline-none focus:border-sage focus:ring-2 focus:ring-sage/30 user-invalid:border-error"
      />
      {hint && <p className="mt-1.5 text-xs text-muted">{hint}</p>}
    </div>
  );
}
