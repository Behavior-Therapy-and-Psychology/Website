import './index.css'
import {Routes, Route} from "react-router-dom";
import Landing from './components/sections/Landing'
import Navbar from './components/layout/Navbar'
import About from './components/sections/About'
import Services from './components/sections/Services/Services'
import Contact from './components/sections/Contact'
import FAQSection from './components/sections/Information'
import Footer from './components/layout/Footer'
import PrivacyPolicy from './components/PrivacyPolicy/privacyPolicy';

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home" className="scroll-mt-24">
          <Landing />
        </section>

        <section id="about" className="scroll-mt-24">
          <About />
        </section>

        <section id="services" className="scroll-mt-24">
          <Services />
        </section>

        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>

        <FAQSection />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
    </Routes>
  );
}
