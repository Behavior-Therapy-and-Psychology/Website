import landingImage from "../../assets/images/landing_image.png"

export default function Landing() {
    return (
<section className="font-inter relative min-h-[100svh] w-full overflow-hidden">

  {/* Background Image */}
  <img
    src={landingImage}
    alt="Lobby Image"
    className="absolute inset-0 h-full w-full object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/30" />

  {/* Bottom Fade */}
  <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent" />

  {/* Content */}
  <div className="relative z-10 flex min-h-[100svh] items-center justify-center px-6 md:px-12 lg:px-16">
    
    <div className="flex w-full max-w-5xl flex-col items-center text-center gap-12 md:gap-16 lg:gap-20 py-20 md:py-28">
      
      <h1 className="text-[clamp(2rem,5vw,4rem)] font-bold text-white leading-tight">
        Behavior Therapy and Psychology
      </h1>

      <p className="max-w-5xl text-neutral-100 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
        Personalized therapy rooted in science and guided by empathy. Whether you’re navigating anxiety, ADHD, autism, or long-standing behavioral patterns, we are here to support you.
      </p>

      <a
        href="#contact"
        className="inline-flex items-center justify-center rounded-full bg-neutral-200 px-8 py-4 text-sm md:text-base font-semibold text-[#443A77] transition hover:bg-neutral-300"
      >
        Contact Us
      </a>

    </div>

  </div>
</section>
    )
}
