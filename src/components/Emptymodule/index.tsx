import coringaImg from 'assets/images/coringa.png'
import styles from './Emptymodule.module.scss'

interface ITextProps {
  title: string
  subtitle: string
}
export function Emptymodule({ title, subtitle }: ITextProps) {
  return (
    <div className={styles.emptyModule}>
      <section className={styles.text}>
        <p className={styles.title}>{title}</p>
        <p className={styles.subtitle}>{subtitle}</p>
      </section>
      <img src={coringaImg} alt="imagem do coringa" />
    </div>
  )
}
