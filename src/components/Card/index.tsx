import styles from './Card.module.scss'

interface IProps {
  name: string
  image: string
  fullName: string
}
export function Card({ image, name, fullName }: IProps) {
  return (
    <div className={styles.card} style={{ backgroundImage: `url(${image})` }}>
      <div>
        <p>{fullName}</p>
        <p>{name}</p>
      </div>
    </div>
  )
}
