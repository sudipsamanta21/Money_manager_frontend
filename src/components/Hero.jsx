import { ArrowRight } from "lucide-react";

const Hero = () =>{
  return (
    <section id="home" className="text-center px-6 pt-20 pb-14 bg-white">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4 max-w-3xl mx-auto">
        Take Control of Your Finances
      </h1>
      <p className="text-gray-500 text-base max-w-xl mx-auto mb-8 leading-relaxed">
        Your foundation for secure, intelligent financial management. Effortlessly
        track your income and expenses to achieve your financial goals.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-3">
        <a
          href="/Signup"
          className="bg-violet-600 hover:bg-violet-700 text-white rounded-lg px-6 py-3 text-sm font-semibold transition-colors"
        >
          Start Tracking for Free
        </a>
        <a
          href="/learn"
          className="bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg px-5 py-3 text-sm font-semibold inline-flex items-center justify-center gap-1.5 transition-colors"
        >
          Learn More <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}
export default Hero;