import { Figurinha } from 'pages/Figurinha';
import { Home } from 'pages/Home';
import { DefaultLayout } from 'pages/Layout/DefaultLayout';
import { MyLeague } from 'pages/Myleague';
import { Notfound } from 'pages/Notfound';
import { Route, Routes } from 'react-router-dom';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="myleague" element={<MyLeague />} />
        <Route path="figurinha/:id" element={<Figurinha />} />
      </Route>
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
}
