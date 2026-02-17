import './index.css'
import Landing from './components/sections/Landing'
import Navbar from './components/layout/Navbar'
import About from './components/sections/About'
import Services from './components/sections/Services/Services'

function App() {
  return (
    <div>
      <Navbar/>
      <main>
        <Landing />
        <About/>
        <Services/>
      </main>
    </div>
  )
}

export default App
