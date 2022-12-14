import { useContext } from 'react';
import { Route, Routes, useNavigate, useParams } from 'react-router-dom';

import { Progressbar } from 'pages/Figurinha/Progressbar';
import { Notfound } from 'pages/Notfound';
import { FigureContext } from 'context/FigureContext';

import emulador from 'data/emulador.json';

import styles from './Figurinha.module.scss';

export function Figurinha() {
  const { addHero } = useContext(FigureContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const figura = emulador.find(item => item.id === Number(id));

  if (!figura) {
    return <Notfound />;
  }

  return (
    <Routes>
      <Route path="*">
        <Route
          index
          element={
            <main>
              <div className={styles.container}>
                <img
                  src={figura.image.url}
                  alt={figura.name}
                  title={figura.name}
                />

                <div className={styles.wrapperData}>
                  <p className={styles.title}>{figura.name}</p>

                  <section className={styles.power}>
                    <h2>Powerstats</h2>
                    <Progressbar
                      done={figura.powerstats.combat}
                      title={'combat'}
                    />
                    <Progressbar
                      done={figura.powerstats.durability}
                      title={'durability'}
                    />
                    <Progressbar
                      done={figura.powerstats.intelligence}
                      title={'intelligence'}
                    />
                    <Progressbar
                      done={figura.powerstats.power}
                      title={'power'}
                    />
                    <Progressbar
                      done={figura.powerstats.speed}
                      title={'speed'}
                    />
                    <Progressbar
                      done={figura.powerstats.strength}
                      title={'strength'}
                    />
                  </section>
                  <div className={styles.wrapperButton}>
                    <button
                      className={styles.btn}
                      type="button"
                      onClick={() => navigate(-1)}
                    >
                      voltar
                    </button>

                    <button
                      className={styles.btn}
                      type="button"
                      onClick={() => addHero(figura.id)}
                    >
                      Adicionar a Liga
                    </button>
                  </div>
                </div>
              </div>
            </main>
          }
        />
      </Route>
    </Routes>
  );
}
