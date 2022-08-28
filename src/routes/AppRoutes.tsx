import { Footer } from 'components/Footer'
import { Navbar } from 'components/Navbar'
import { Aboutus } from 'pages/Aboutus'
import { Home } from 'pages/Home'
import { MyLeague } from 'pages/Myleague'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

export function AppRoutes() {
  return (
    <Router>
      <main>
        <Navbar />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="myleague" element={<MyLeague />} />
            <Route path="about" element={<Aboutus />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}
