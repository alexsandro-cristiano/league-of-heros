import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About } from 'page/About';
import { Home } from 'page/Home';
import { Myleague } from 'page/Myleague';
import { Navbar } from 'components/Navbar';

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/myleague" element={<Myleague />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    )
}