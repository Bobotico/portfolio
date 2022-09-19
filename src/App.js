import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

function App() {
  return(
    <Router basename="/portfolio">

      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/contacts" element={<Contacts />} />
      </Routes>

      <Footer />

    </Router>
  )
}

export default App;
