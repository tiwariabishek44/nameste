import Lotus from "@/components/Lotus";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-sage-deep text-white flex items-center justify-center text-center px-6">
      <div className="max-w-md flex flex-col items-center">
        <Lotus className="w-12 h-12 text-[var(--color-gold)] mb-6" />
        <p className="eyebrow eyebrow--light mb-3">Lost the path</p>
        <h1 className="font-[family-name:var(--font-display)] text-5xl font-light mb-4">This page found its peace.</h1>
        <p className="text-[#dfe5dc] mb-8">The page you&rsquo;re looking for has drifted away — let&rsquo;s guide you back.</p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a href="/" className="btn btn--ghost-light">Return home</a>
          <a href="/treatments" className="btn btn--ghost-light">View treatments</a>
        </div>
      </div>
    </main>
  );
}
