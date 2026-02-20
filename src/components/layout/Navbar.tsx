import { useState } from "react"
import Logo from "/Logo.png"
import { useEffect } from "react";


export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // md breakpoint
        document.body.style.overflow = "";
        setOpen(false);
      }
    };

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    window.addEventListener("resize", handleResize);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("resize", handleResize);
    };
  }, [open]);

    return (
      <div>
        <nav className="hidden md:block bg-white/85 backdrop-blur rounded-full px-8 fixed top-8 left-1/2 z-50 -translate-x-1/2 w-2/3 lg:w-3/4 h-12 max-w-6xl">
            <div className="grid grid-cols-[1fr_auto_1fr] items-center h-full text-sm lg:text-base whitespace-nowrap gap-x-2">
                <div className="flex justify-around items-center gap-8">
                    <a href="#home" className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full">Home</a>
                    <a href="#about" className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full">About</a>
                </div>
                <div className="flex justify-center items-center">
                    <img src={Logo} alt="Main Logo" className="h-10 w-auto object-contain"/>
                </div>
                <div className="flex justify-around items-center gap-8">
                    <a href="#services" className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full">Services</a>
                    <a href="#contact" className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full">Contact Us</a>
                </div>
            </div>   
          </nav>

{/* Mobile Menu Overlay */}

<nav className="md:hidden fixed top-0 left-0 right-0 z-500 bg-white">
  <div className="flex items-center justify-between h-20 px-10">

    {/* Logo */}
    <img
      src={Logo}
      alt="Logo"
      className="h-8 w-auto object-contain"
    />

    {/* Hamburger */}
    <button
      onClick={() => setOpen(!open)}
      className="text-3xl text-[#443A77] z-50"
    >
      ☰
    </button>

  </div>
</nav>
  {/* Overlay */}
  <div
  className={`md:hidden fixed inset-0 z-400 ${
    open ? "pointer-events-auto" : "pointer-events-none"
  }`}
>
  <div
    className={`
      fixed inset-0 bg-white/95 backdrop-blur
      flex flex-col pt-32 items-center
      gap-10
      overflow-y-auto
      text-2xl
      transition-transform duration-300
      ${open ? "translate-x-0" : "-translate-x-full"}
    `}
  >
{[
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Contact Us", id: "contact" },
].map((item, index) => (
  <div key={item.id} className="w-64 text-center">

    <button
      onClick={() => {
        setOpen(false);
        document.getElementById(item.id)?.scrollIntoView({
          behavior: "smooth",
        });
      }}
      className="w-full py-4 text-2xl text-[#443A77] hover:opacity-70 transition-opacity duration-200"
    >
      {item.label}
    </button>

    {index !== 3 && (
    <div className="flex justify-center">
      <div className="h-[2px] w-56 bg-[#443A77]/30" />
    </div>
    )}

  </div>
))}
  </div>
</div>
</div>
    )
}
