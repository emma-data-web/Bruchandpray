import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Books from './Pages/Books'
// import Footer from './Pages/footer'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Books />} />
        </Routes>
      </Router>
      {/* <Home /> */}
      {/* <Footer /> */}
    </>
  )
}

export default App
