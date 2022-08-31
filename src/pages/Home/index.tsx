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
        <div className={styles.title}>
          <span>Encontre o herói para sua liga.</span>
          <h2>Monte sua liga com os melhores heróis de todos os universos.</h2>
        </div>
        <img src={heroImg} alt="imagem de super herois" />
      </section>
      <section className={styles.cardList}>
        <h3>Nossos Heróis</h3>
        <div className={styles.wrapper}>
          {lista.map(item => {
            return (
              <>
                <Card
                  image={item.image.url}
                  name={item.name}
                  fullName={item.biography['full-name']}
                />
              </>
            )
          })}
        </div>
      </section>
    </main>
  )
}
