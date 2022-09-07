import { Footer } from 'components/Footer';
import { Navbar } from 'components/Navbar';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from 'routes/AppRoutes';

export function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </>
  );
}
