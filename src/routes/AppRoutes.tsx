import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Navbar } from 'components/Navbar'
import { Pagedefault } from 'pages/Pagedefault'
import { Home } from 'pages/Home'
import { Myleague } from 'pages/Myleague'
import { Aboutus } from 'pages/Aboutus'
import { Footer } from 'components/Footer'

export function AppRoutes() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Pagedefault />}>
          <Route index element={<Home />} />
          <Route path="myleague" element={<Myleague />} />
          <Route path="about" element={<Aboutus />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  )
}
