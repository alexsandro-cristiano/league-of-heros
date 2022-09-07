import { createContext, ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emulador from 'data/emulador.json';

interface Powerstats {
  intelligence: string;
  strength: string;
  speed: string;
  durability: string;
  power: string;
  combat: string;
}

interface Image {
  url: string;
}

interface Figure {
  id: number;
  name: string;
  powerstats: Powerstats;
  image: Image;
}

interface FigureContextType {
  league: Figure[];
  addHero: (id: number) => void;
}

interface IFigureContextProviderProps {
  children: ReactNode;
}

export const FigureContext = createContext({} as FigureContextType);

export function FigureContextProvider({
  children
}: IFigureContextProviderProps) {
  const [league, setLeague] = useState<Figure[]>([]);
  const navigate = useNavigate();

  function addHero(id: number) {
    const newHero = emulador.find(item => item.id === id);

    if (newHero) {
      setLeague(state => [...state, newHero]);
      navigate(`/myleague`);
    }
  }

  return (
    <FigureContext.Provider value={{ league, addHero }}>
      {children}
    </FigureContext.Provider>
  );
}
