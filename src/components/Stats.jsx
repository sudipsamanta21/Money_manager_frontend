
const STATS = [
  { value: "50K+", label: "Active users" },
  { value: "₹2.4B+", label: "Tracked monthly" },
  { value: "4.9/5", label: "Average rating" },
  { value: "120+", label: "Countries supported" },
];

const Stats = () => {
  return (
    <section className="px-6 py-16 bg-violet-600">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {STATS.map((s) => (
          <div key={s.label}>
            <div className="text-3xl md:text-4xl font-extrabold text-white mb-1">{s.value}</div>
            <div className="text-sm text-violet-200 font-medium">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
