import { useEffect, useRef, useState } from "react";

interface Service {
  title: string;
  description: string;
}

const baseServices: Service[] = [
  {
    title: "Anxiety Treatment",
    description:
      "Evidence-based therapy to help manage and reduce anxiety symptoms.",
  },
  {
    title: "ADHD Support",
    description:
      "Structured behavioral strategies to improve focus and executive function.",
  },
  {
    title: "Autism Evaluations",
    description:
      "Comprehensive diagnostic assessments tailored to each client.",
  },
  {
    title: "Behavioral Therapy",
    description:
      "Targeted interventions that promote measurable, lasting change.",
  },
  {
    title: "Psychological Testing",
    description:
      "In-depth evaluations to clarify diagnosis and guide treatment planning.",
  },
  {
    title: "Parent Coaching",
    description:
      "Collaborative coaching to support behavior strategies at home.",
  },
];

export default function ServicesSlider() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const services = [...baseServices, ...baseServices, ...baseServices];
  // const setLength = baseServices.length;

  // -----------------------------
  // START IN MIDDLE
  // -----------------------------
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

requestAnimationFrame(() => {
  slider.scrollLeft = slider.scrollWidth / 3;
});
  }, []);

  // -----------------------------
  // AUTO SCROLL RIGHT FOREVER
  // -----------------------------
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let frame: number;
    const speed = 0.6; // increase slightly if needed

    const animate = () => {
      if (!isDragging.current && activeIndex === null) {
        slider.scrollLeft += speed;

        const totalWidth = slider.scrollWidth;
        const oneSetWidth = totalWidth / 3;

        // When reaching end of right buffer
        if (slider.scrollLeft >= oneSetWidth * 2) {
          slider.scrollLeft -= oneSetWidth;
        }
      }

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [activeIndex]);

  // -----------------------------
  // DRAG
  // -----------------------------
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX;
    scrollStart.current = sliderRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !sliderRef.current) return;
    const walk = e.pageX - startX.current;
    sliderRef.current.scrollLeft = scrollStart.current - walk * 1.2;
  };

  const stopDragging = () => {
    isDragging.current = false;
  };

  // -----------------------------
  // CENTER EXPANDED CARD
  // -----------------------------
useEffect(() => {
  if (activeIndex === null || !sliderRef.current) return;

  const slider = sliderRef.current;
  const card = slider.children[activeIndex] as HTMLElement;
  if (!card) return;

  // Wait for width transition to finish
  const timeout = setTimeout(() => {
    const sliderCenter = slider.clientWidth / 2;
    const cardCenter = card.offsetLeft + card.offsetWidth / 2;

    slider.scrollTo({
      left: cardCenter - sliderCenter,
      behavior: "smooth",
    });
  }, 300); // match your duration-500 (slightly less is fine)

  return () => clearTimeout(timeout);
}, [activeIndex]);


  return (
    <div ref={wrapperRef} className="relative overflow-hidden mt-24">
      <div
        ref={sliderRef}
        className="flex items-start gap-8 px-4 overflow-x-auto cursor-grab active:cursor-grabbing select-none scrollbar-hide"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
      >
        {services.map((service, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={index}
              className={`
                flex-shrink-0
                transition-all duration-500 ease-in-out
                rounded-2xl shadow-xl overflow-hidden
                ${
                  isActive
                    ? `
                      w-[90vw] sm:w-[75vw] md:w-[500px]
                      min-h-[400px]
                      bg-white text-[#443A77]
                    `
                    : `
                      w-[85vw] sm:w-[65vw] md:w-[320px]
                      min-h-[260px]
                      bg-[#443A77] text-white
                    `
                }
                p-8
              `}
            >
              <h3 className="text-2xl font-bold mb-4">
                {service.title}
              </h3>

              <p className="text-base leading-relaxed mb-6">
                {service.description}
              </p>

              <button
                className="text-sm underline"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex(isActive ? null : index);
                }}
              >
                {isActive ? "Close" : "Learn More"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
