import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import GetBook from './GetBook'
import Layout from './components/layout'
import GetTickets from './GetTickets'
import DonateAnonymous from './DonateAnonymous'
import DonatePublicly from './DonatePublicly'
import PastEventPage from './Pages/Home/PastEventPage'
// import Footer from './Pages/footer'

import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/get-book" element={<Layout><GetBook /></Layout>} />
        <Route path="/upcoming-events" element={<Layout><GetTickets /></Layout>} />
        <Route path="/donate-anonymously" element={<Layout><DonateAnonymous /></Layout>} />
        <Route path="/donate-publicly" element={<Layout><DonatePublicly /></Layout>} />
        <Route path="/past-events" element={<Layout><PastEventPage /></Layout>} />
      </Routes>
    </Router>
  );
}
export default App
