import { Route, Routes, useNavigate, useParams } from 'react-router-dom'
import emulador from 'data/emulador.json'
import { Notfound } from 'pages/Notfound'
import styles from './Figurinha.module.scss'
import { Progressbar } from 'pages/Figurinha/Progressbar'
export function Figurinha() {
  const { id } = useParams()
  const navigate = useNavigate()
  const figura = emulador.find(item => item.id === id)
  if (!figura) {
    return <Notfound />
  }
  return (
    <Routes>
      <Route path="*">
        <Route
          index
          element={
            <main>
              <div className={styles.container}>
                <img src={figura.image.url} alt={figura.name} />

                <div className={styles.wrapperData}>
                  <p>{figura.name}</p>

                  <section>
                    <h2>Powerstats</h2>

                    <div>
                      <span>bla</span>
                      <Progressbar done={figura.powerstats.combat} />
                    </div>
                    <Progressbar done={figura.powerstats.durability} />
                    <Progressbar done={figura.powerstats.intelligence} />
                    <Progressbar done={figura.powerstats.power} />
                    <Progressbar done={figura.powerstats.speed} />
                    <Progressbar done={figura.powerstats.strength} />
                  </section>
                  <button type="button" onClick={() => navigate(-1)}>
                    voltar
                  </button>
                  <button> Adicionar a Liga</button>
                </div>
              </div>
            </main>
          }
        />
      </Route>
    </Routes>
  )
}
