import coringaImg from 'assets/images/coringa.png'
import styles from './Myleague.module.scss'
import { Link } from 'react-router-dom'
import { Card } from 'components/Card'
import { useState } from 'react'

export function MyLeague() {
  const [myLeague, setMyLeague] = useState([
    { name: 'teste' },
    { name: 'teste' }
  ])
  return (
    <main>
      <div className={styles.wrapper}>
        {myLeague.length ? (
          myLeague.map(() => {
            return (
              <>
                <Card />
              </>
            )
          })
        ) : (
          <section className={styles.emptyModule}>
            <section className={styles.text}>
              <p className={styles.title}>
                Sua liga ainda não tem nenhum membro!
              </p>
              <p className={styles.subtitle}>
                Convide algum dos{' '}
                <Link to={'/'} className={styles.subtitleLink}>
                  heróis
                </Link>{' '}
                para ela.
              </p>
            </section>
            <img src={coringaImg} alt="imagem do coringa" />
          </section>
        )}
      </div>
    </main>
  )
}
