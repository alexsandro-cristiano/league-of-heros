import universoImg from 'assets/images/universo.jpg'
import { useNavigate } from 'react-router-dom'
import styles from './Notfound.module.scss'

export function Notfound() {
  const navigate = useNavigate()
  return (
    <section className={styles.information}>
      <article className={styles.wrapperText}>
        <p className={styles.title}>404 Página não encontrada.</p>
        <p className={styles.subtitle}>
          O herói que você procura ainda não nasceu em nenhum universo.
        </p>
        <span className={styles.btn} onClick={() => navigate(-1)}>
          retornar ao seu universo
        </span>
      </article>
      <img src={universoImg} alt="imagem" />
    </section>
  )
}
