import heroImg from 'assets/images/heros.png'
import { Card } from 'components/Card'
import styles from './Home.module.scss'

import { useState } from 'react'

import emulador from 'data/emulador.json'

export function Home() {
  const [lista, setLista] = useState(emulador)

  return (
    <main>
      <section className={styles.landing}>
        <div className={styles.wrapperText}>
          <p className={styles.title}>Encontre o herói para sua liga.</p>
          <p className={styles.subtitle}>
            Monte sua liga com os melhores heróis de todos os universos.
          </p>
        </div>
        <img src={heroImg} alt="imagem de super herois" />
      </section>
      <section className={styles.wrapperCard}>
        <p className={styles.titleSection}>Heróis Disponíveis</p>
        <div className={styles.boxCards}>
          {lista.map(item => {
            return <Card id={Number(item.id)} image={item.image.url} />
          })}
        </div>
      </section>
    </main>
  )
}
