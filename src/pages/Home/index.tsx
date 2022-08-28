import heroImg from 'assets/images/heros.png'
import { Card } from 'components/Card'
import styles from './Home.module.scss'

export function Home() {
  return (
    <>
      <section className={styles.landing}>
        <div className={styles.title}>
          <span>Encontre o herói para sua liga.</span>
          <h2>
            Monte sua liga de herois com os melhores herois de todos os
            univeros.
          </h2>
        </div>
        <img src={heroImg} alt="imagem de super herois" />
      </section>
      <section className={styles.cardList}>
        <h3>Nossos Heróis</h3>
        <div className={styles.wrapper}>
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </>
  )
}
