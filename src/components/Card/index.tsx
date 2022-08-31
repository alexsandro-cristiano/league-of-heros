import { useNavigate } from 'react-router-dom'
import styles from './Card.module.scss'

interface ICardProps {
  id: number
  image: string
}

export function Card({ image, id }: ICardProps) {
  const navigate = useNavigate()
  return (
    <div
      onClick={() => navigate(`/figurinha/${id}`)}
      className={styles.card}
      style={{ backgroundImage: `url(${image})` }}
    ></div>
  )
}
