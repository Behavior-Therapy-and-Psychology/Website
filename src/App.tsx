import './index.css'
import Landing from './components/sections/Landing'
import Navbar from './components/layout/Navbar'
import About from './components/sections/About'
import Services from './components/sections/Services/Services'
import Contact from './components/sections/Contact'

function App() {
  return (
    <div>
      <Navbar/>
      <main>
        <Landing />
        <About/>
        <Services/>
        <Contact/>
      </main>
    </div>
  )
}

export default App
