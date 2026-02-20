import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What insurance is accepted?",
    answer:
      `Aetna, Anthem, Blue Shield, Cigna, Magellan, Optum, Tricare and United Healthcare. 
      
      Insurance will be contacted before testing to make sure the service is covered and to determine if a pre-authorization is required. A copy of the insurance card and the client’s birthday are required to verify the service.`,
  },
  {
    question: "Can the testing be private pay?",
    answer:
      `Yes, private pay is accepted. Cash, credit card, check, or Venmo are all accepted.`,
  },
  {
    question: "How long does the testing process take?",
    answer:
      `From the time of testing to feedback, it is approximately two weeks. That will depend on schedules and whether all test documents are received from parents and teachers`,
  },
  {
    question: "Are telehealth services offered?",
    answer:
      `In person appointments are preferred, however, if the client lives outside of the immediate area, a virtual intake can be done as well as a feedback session. However, all testing services must be done in the office.`,
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-[#443A77] mb-12 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl overflow-hidden"
              >
                {/* Question */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-medium text-[#443A77]">
                    {item.question}
                  </span>

                  {/* Rotating + */}
                  <span
                    className={`text-2xl font-light transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-gray-600 leading-relaxed whitespace-pre-line">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
