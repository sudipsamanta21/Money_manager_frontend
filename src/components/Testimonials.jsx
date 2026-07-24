import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Ananya Rao",
    role: "Freelance Designer",
    quote:
      "Money Manager finally made budgeting click for me. I can see exactly where my freelance income goes each month.",
  },
  {
    name: "Sudip Samanta",
    role: "Software Engineer",
    quote:
      "The dashboard is so clean. I check my balance every morning with my coffee — it takes ten seconds.",
  },
  {
    name: "Meera Iyer",
    role: "Small Business Owner",
    quote:
      "Splitting personal and business expenses used to be a mess. Categories and reports here sorted that out fast.",
  },
];

const Testimonials = () => {
  return (
    <section className="px-6 py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Loved by people who track every rupee
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Here's what a few of our users have to say about managing money with us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex flex-col"
            >
              <div className="flex gap-1 mb-4 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-1">"{t.quote}"</p>
              <div>
                <div className="text-sm font-bold text-gray-900">{t.name}</div>
                <div className="text-xs text-gray-400">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Testimonials;
