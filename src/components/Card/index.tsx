import styles from './Card.module.scss'

interface IProps {
  image: string
}
export function Card({ image }: IProps) {
  return (
    <div
      className={styles.card}
      style={{ backgroundImage: `url(${image})` }}
    ></div>
  )
}
