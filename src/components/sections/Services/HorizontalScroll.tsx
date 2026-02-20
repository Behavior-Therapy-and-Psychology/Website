import { useEffect, useRef, useState } from "react";

interface Service {
  title: string;
  description: string;
}

const baseServices: Service[] = [
  {
    title: "Learning Disorders",
    description:
      `Learning Disorder Evaluations are offered in the areas of reading, writing and math.
      Coordination with school personnel and written accommodations are included.`,
  },
  {
    title: "ADHD Evaluation",
    description:
      `ADHD evaluations are offered to individuals ages 4 to 16. 
      
      Evaluations include a full test battery with included analyses of other diagnoses if needed. Evaluations include test results and recommendations for any necessary goals, services and school accommodations.`,
  },
  {
    title: "Autism Evaluation",
    description:
      `Autism evaluations are offered to individuals 1 year to adult in order to make new diagnoses or update current scores. Evaluations include test results and recommendations for any necessary goals, services and school accommodations.`,
  },
  {
    title: "Behavioral Consultation",
    description:
      `Parent consultation to evaluate behavioral concerns in the home and to establish behavior modification goals and treatment.`,
  },
  {
    title: "Psychological Testing",
    description:
      `Psychological Testing is offered to individuals for a variety of diagnoses, including ASD, ADHD, Anxiety and Learning Disorders. 
    
      The process will begin with an intake session to gather history and a description of symptoms. If testing is warranted, it is
      scheduled at the time of the intake. 
      
      A report of results is written and feedback is then given to the client and/or caregiver.`,
  },
  {
    title: "School Consultation / Workshops",
    description:
      `Dr. Sweeten provides classroom consultation to teachers in order to address and support behavior concerns in the classroom. She also provides workshops to school district staff in the area of behavior management.`,
  }
];

export default function ServicesSlider() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const services = [...baseServices, ...baseServices, ...baseServices];

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
  const speed = 0.6;

  const animate = () => {
    if (!isDragging.current && activeIndex === null) {
      slider.scrollBy({ left: speed });

      const totalWidth = slider.scrollWidth;
      const oneSetWidth = totalWidth / 3;

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
        className="flex items-start gap-8 overflow-x-auto touch-pan-x cursor-grab active:cursor-grabbing select-none scrollbar-hide"
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
                flex flex-col
                justify-between
                items-start
                transition-all duration-500 ease-in-out
                rounded-2xl shadow-xl overflow-hidden
                ${
                  isActive
                    ? `
                      w-[80%] sm:w-[65%] md:w-[400px]
                      min-h-[320px]
                      bg-white text-[#443A77]
                    `
                    : `
                      w-[55vw] sm:w-[40vw] md:w-[320px]
                      min-h-[200px] sm:min-h-[220px]
                      bg-[#443A77] text-white
                    `
                }
                p-8
              `}
            >
              <h3 className="text-xl md:text-2xl font-bold">
                {service.title}
              </h3>

              <div
              className={`
                overflow-hidden transition-all
                ${isActive ? "max-h-100 opacity-100 mt-4 duration-800 ease-out" : "max-h-0 opacity-0 duration-200 ease-in"}
              `}
            >
              <p className="text-md md:text-base leading-relaxed whitespace-pre-line">
                {service.description}
              </p>
            </div>
            <div className="pt-6">
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
            </div>
          );
        })}
      </div>
    </div>
  );
}
