import { useState } from "react"
import Logo from "../../assets/icons/Logo.svg"

export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
      <div>
        <nav className="hidden md:block bg-white/85 backdrop-blur rounded-full px-8 fixed top-8 left-1/2 z-50 -translate-x-1/2 w-2/3 lg:w-3/4 h-12 max-w-6xl">
            <div className="grid grid-cols-[1fr_auto_1fr] items-center h-full text-sm lg:text-base whitespace-nowrap gap-x-2">
                <div className="flex justify-around items-center gap-8">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                </div>
                <div className="flex justify-center items-center">
                    <img src={Logo} alt="Main Logo" className="h-10 w-auto object-contain"/>
                </div>
                <div className="flex justify-around items-center gap-8">
                    <a href="#services">Services</a>
                    <a href="#contact">Contact Us</a>
                </div>
            </div>   
          </nav>

        {/* Mobile Menu Overlay */}
        <div className="md:hidden fixed inset-0 z-50 pointer-events-none">
          
          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className={`pointer-events-auto fixed top-8 right-8 text-3xl z-50 transition-colors duration-400
              ${open ? "text-black" : "text-white"}`}
          >
            ☰
          </button>

          {/* Overlay */}
          <div
            className={`
              fixed inset-0 bg-white/95 backdrop-blur
              flex flex-col justify-center items-center
              gap-10
              text-2xl
              transition-transform duration-300
              ${open ? "translate-x-0" : "-translate-x-full"}
            `}
          >
            <a href="#home" onClick={() => setOpen(false)}>Home</a>
            <a href="#about" onClick={() => setOpen(false)}>About</a>
            <a href="#services" onClick={() => setOpen(false)}>Services</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact Us</a>
          </div>
        </div>
      </div>
    )
}
