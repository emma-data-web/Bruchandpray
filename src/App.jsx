import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Books from './Books'
import GetTickets from './GetTickets'
import DonateAnonymous from './DonateAnonymous'
import DonatePublicly from './DonatePublicly'
import PastEventPage from './Pages/Home/PastEventPage'
// import Footer from './Pages/footer'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/get-book" element={<Books />} />
          <Route path="/upcoming-events" element={<GetTickets />} />
          <Route path="/donate-anonymously" element={<DonateAnonymous />} />
          <Route path="/donate-publicly" element={<DonatePublicly />} />
          <Route path="/past-events" element={<PastEventPage />} />
        </Routes>
      </Router>
  
    </>
  )
}

export default App
