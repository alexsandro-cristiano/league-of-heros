import coringaImg from 'assets/images/coringa.png'
import styles from './Myleague.module.scss'
import { Link } from 'react-router-dom'
import { Card } from 'components/Card'
import { useState } from 'react'

import emulador from 'data/emulador.json'
export function MyLeague() {
  const [myLeague, setMyLeague] = useState(emulador)
  return (
    <main>
      <div className={styles.wrapper}>
        {myLeague.length ? (
          myLeague.map(item => {
            return (
              <>
                <Card
                  image={item.image.url}
                  name={item.name}
                  fullName={item.biography['full-name']}
                />
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
