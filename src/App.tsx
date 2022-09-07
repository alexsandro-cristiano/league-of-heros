import { FigureContextProvider } from 'context/FigureContext';
import { BrowserRouter } from 'react-router-dom';

import { Router } from 'routes/Router';

export function App() {
  return (
    <BrowserRouter>
      <FigureContextProvider>
        <Router />
      </FigureContextProvider>
    </BrowserRouter>
  );
}
