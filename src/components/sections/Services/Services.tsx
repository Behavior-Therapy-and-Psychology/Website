import ServicesSlider from "./HorizontalScroll"

export default function Services() {
    return (
<section className="bg-white py-28 md:py-36 overflow-hidden">

  <div className="mx-auto w-full max-w-7xl px-6 md:px-12">

    <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-[#443A77] mb-20">
      Our Services
    </h2>

    {/* <div className="relative flex flex-col items-center text-center md:flex-row md:justify-between text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-700 space-y-6 md:space-y-0">

        <span className="smoke-word word-1">Anxiety Treatment</span>
        <span className="smoke-word word-2">ADHD Support</span>
        <span className="smoke-word word-3">Autism Evaluations</span>
        <span className="smoke-word word-4">Behavioral Therapy</span>
        <span className="smoke-word word-5">Psychological Testing</span>

    </div> */}
  </div>
 <ServicesSlider/>
</section>
    )
}
