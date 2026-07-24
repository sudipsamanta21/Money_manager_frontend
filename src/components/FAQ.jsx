import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "Is Money Manager free to use?",
    a: "Yes. You can track income and expenses for free. Premium plans add advanced reports and multi-account support.",
  },
  {
    q: "Is my financial data secure?",
    a: "All data is encrypted end-to-end and we never sell your information to third parties.",
  },
  {
    q: "Can I link my bank account?",
    a: "You can connect supported banks for automatic transaction imports, or add entries manually if you prefer.",
  },
  {
    q: "Does it work on mobile?",
    a: "The dashboard is fully responsive, and dedicated iOS and Android apps are on the way.",
  },
];

const FAQ = () =>{
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="px-6 py-20 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Frequently asked questions
          </h2>
          <p className="text-gray-500">Everything you need to know before you get started.</p>
        </div>

        <div className="flex flex-col gap-3">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.q}
                className="bg-white border border-gray-100 rounded-xl px-5 py-4"
              >
                <button
                  className="w-full flex items-center justify-between text-left"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                >
                  <span className="text-sm font-semibold text-gray-900">{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`text-gray-400 shrink-0 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="text-sm text-gray-500 leading-relaxed mt-3">{faq.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default FAQ;
