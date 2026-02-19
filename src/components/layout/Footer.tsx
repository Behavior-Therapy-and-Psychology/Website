import Logo from "../../assets/icons/Logo.png"; // adjust path if needed

export default function Footer() {
  return (
    <footer className="w-full bg-[#F4F2FA] text-[#443A77] px-6 py-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-10 text-center md:text-left">

        {/* LEFT SIDE — LOGO */}
        <div className="hidden md:flex items-center">
          <img
            src={Logo}
            alt="Practice Logo"
            className="h-12 w-auto object-contain"
          />
        </div>

        {/* RIGHT SIDE — SITE MAP */}
        <div className="flex flex-col items-center md:items-end gap-4 text-sm">

          <div className="flex flex-wrap gap-8">
            <a
              href="#home"
              className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </a>

            <a
              href="#about"
              className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              About
            </a>

            <a
              href="#services"
              className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              Services
            </a>

            <a
              href="#contact"
              className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact
            </a>
            
            <div className="opacity-70">
                <a
                href="/privacy"
                className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                Privacy Policy
                </a>
            </div>
          </div>


          <div className="text-xs opacity-50 pt-2">
            © {new Date().getFullYear()} Behavior Therapy and Psychology. All rights reserved.
          </div>

        </div>
      </div>
    </footer>
  );
}
