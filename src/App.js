import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

function App() {
  return(
    <Router>

      <Navbar />

      <Routes>
        <Route exact path="/portfolio" element={<Home />} />

        <Route path="/portfolio/about" element={<About />} />

        <Route path="/portfolio/contacts" element={<Contacts />} />
      </Routes>

      <Footer />

    </Router>
  )
}

export default App;
