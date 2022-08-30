import heroImg from 'assets/images/heros.png'
import { Card } from 'components/Card'
import styles from './Home.module.scss'

export function Home() {
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
        <div className={styles.wrapper}></div>
      </section>
    </main>
  )
}
