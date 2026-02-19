import headshotImage from "../../assets/images/Kathie Sweeten Headshot.jpeg"
// absolute inset-0 bg-[#443A77] -skew-y-4
export default function About() {
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
        
        <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
          Specializes in evidence-based outpatient therapy and comprehensive psychological testing. With advanced training in assessment, diagnostics, and applied behavior analysis, she provides individualized treatment plans that promote meaningful, measurable change for clients of all ages.
        </p>

        <a
          href="#contact"
          className="inline-flex px-8 py-4 rounded-full bg-white text-[#443A77] font-semibold transition hover:bg-neutral-400"
        >
          Get in Touch
        </a>

      </div>

      {/* Image Column */}
      <div className="flex justify-center md:justify-end">
        <img
          src={headshotImage}
          alt=""
          className="w-64 sm:w-72 md:w-80 lg:w-96 rounded-xl shadow-2xl"
        />
      </div>

    </div>

  </div>
</section>    
)
}
