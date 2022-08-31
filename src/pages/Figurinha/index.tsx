import { Route, Routes, useNavigate, useParams } from 'react-router-dom'
import emulador from 'data/emulador.json'
import { Notfound } from 'pages/Notfound'
import styles from './Figurinha.module.scss'
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
              </div>
            </main>
          }
        />
      </Route>
    </Routes>
  )
}
