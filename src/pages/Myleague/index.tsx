import coringaImg from 'assets/images/coringa.png';
import { Card } from 'components/Card';
import { FigureContext } from 'context/FigureContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './Myleague.module.scss';

export function MyLeague() {
  const { league } = useContext(FigureContext);
  return (
    <main>
      <div>
        {league.length ? <p className={styles.title}>Minha Liga</p> : ''}
      </div>
      <div className={styles.wrapper}>
        {league.length ? (
          league.map(item => {
            return (
              <>
                <Card
                  key={item.id.toString()}
                  id={item.id}
                  image={item.image.url}
                />
              </>
            );
          })
        ) : (
          <section className={styles.emptyModule}>
            <article className={styles.wrapperText}>
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
            </article>
            <img src={coringaImg} alt="imagem do coringa" />
          </section>
        )}
      </div>
    </main>
  );
}
