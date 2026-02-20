import ServicesSlider from "./HorizontalScroll"

export default function Services() {
    return (
<section className="bg-white py-28 md:py-36 overflow-hidden">

  <div className="mx-auto w-full max-w-7xl px-6 md:px-12">

    <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-[#443A77] mb-20">
      Services
    </h2>

  </div>
 <ServicesSlider/>
</section>
    )
}
