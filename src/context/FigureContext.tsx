import { createContext, ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emulador from 'data/emulador.json';
import { Figure } from 'types/IFigure';

const LOCAL_STORAGE_KEY = 'heros';

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

  function loadSavedHero() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setLeague(JSON.parse(saved));
    }
  }

  useEffect(() => {
    loadSavedHero();
  }, []);

  function setLeagueAndSave(newHero: Figure[]) {
    setLeague(newHero);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newHero));
  }

  function addHero(id: number) {
    const newHero = emulador.find(item => item.id === id);
    const isRegistered = !Boolean(league.find(item => item.id === id));

    if (newHero && isRegistered) {
      setLeagueAndSave([...league, newHero]);
      navigate(`/myleague`);
    } else {
      console.log('lançar erro');
    }
  }

  return (
    <FigureContext.Provider value={{ league, addHero }}>
      {children}
    </FigureContext.Provider>
  );
}
