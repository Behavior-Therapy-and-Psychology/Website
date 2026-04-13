import { useState } from "react"
import headshotImage from "/Kathie Sweeten Headshot.jpeg"
// absolute inset-0 bg-[#443A77] -skew-y-4
export default function About() {
const [ expanded, setExpanded ] = useState(false)

    return (
<section className="relative py-20 md:py-28 lg:py-36 z-40">

  {/* Keep your angled background exactly as-is */}
  <div className="absolute inset-0 bg-[#443A77] -skew-y-4" />

  <div className="relative mx-auto w-full max-w-6xl px-6 md:px-12 lg:px-16">
    
    <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-[2.5fr_1.5fr] gap-12 md:gap-16 items-center">
      
      {/* Text Column */}
      <div className="text-white space-y-8">
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          Kathie Sweeten, Psy.D., BCBA-D
        </h2>

        <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
          A licensed clinical psychologist and a doctoral level Board Certified Behavior Analyst.
        </p>
      <div>
        {/* Always visible paragraph */}
        <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
          Specializes in evidence-based outpatient therapy and comprehensive psychological testing. With advanced training in assessment, diagnostics, and applied behavior analysis, she provides individualized treatment plans that promote meaningful, measurable change for clients of all ages.
        </p>

        {/* Expandable section */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            expanded ? "max-h-screen mt-4" : "max-h-0"
          }`}
        >
          <div className="space-y-4">
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
              Dr. Kathie Sweeten has extensive experience in the field of neurodevelopmental disorders. Dr. Sweeten specializes in children, adolescents and young adults with autism spectrum disorder, attention-deficit/hyperactivity disorder, anxiety, depression and other behavior and learning concerns.
            </p>

            <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
              Dr. Sweeten has been working with individuals on the autism spectrum throughout her career and has done early intervention, including applied behavior analysis. She has done extensive parent training, school consultations, workshops and community trainings.
            </p>

            <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
              She is currently accepting new clients for psychological evaluations and assessment.
            </p>
          </div>
        </div>

        {/* Button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-2 text-sm text-gray-300 hover:text-gray-100 transition"
        >
          {expanded ? "Show less" : "Learn more"}
        </button>
      </div>
          <a
            href="#contact"
            className="inline-flex px-8 py-4 rounded-full bg-white text-[#443A77] font-semibold transition hover:bg-neutral-300"
          >
            Get in Touch
          </a>
        
      </div>

      {/* Image Column */}
      <div className="flex justify-center md:justify-end">
          <img
            src={headshotImage}
            className="w-64 sm:w-72 md:w-80 lg:w-96 rounded-xl shadow-2xl"
          />
      </div>

    </div>

  </div>
</section>    
)
}
