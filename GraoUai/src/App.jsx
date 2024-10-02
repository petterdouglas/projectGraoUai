// hooks
import { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom"

// Components
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Mainpage from './pages/Mainpage'


// Styles
import './styles/app.sass'

function App() {

  useEffect(() => {
    <NavLink to='/' />
    window.scrollTo({
      top: 0,
      behavior: "instant"
    })
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Mainpage />} />
      </Routes>
      <Footer />
    </Router >
  )
}

export default App
