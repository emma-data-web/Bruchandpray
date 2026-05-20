import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Books from './Books'
import Layout from './components/layout'
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
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/get-book" element={<Layout><Books /></Layout>} />
          <Route path="/upcoming-events" element={<Layout><GetTickets /></Layout>} />
          <Route path="/donate-anonymously" element={<Layout><DonateAnonymous /></Layout>} />
          <Route path="/donate-publicly" element={<Layout><DonatePublicly /></Layout>} />
          <Route path="/past-events" element={<Layout><PastEventPage /></Layout>} />
        </Routes>
      </Router>
  
    </>
  )
}

export default App
