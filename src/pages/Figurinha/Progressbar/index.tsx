import { useEffect, useState } from 'react'
import styles from './Progressbar.module.scss'

interface IProgessbarProps {
  done?: number | string
}
export function Progressbar({ done }: IProgessbarProps) {
  const [style, setStyle] = useState({})
  if (done === 'null') {
    done = ''
  }

  useEffect(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`
    }
    setStyle(newStyle)
  }, [])

  return (
    <div className={styles.progress}>
      <div className={styles.progressDone} style={style}>
        {done}
      </div>
    </div>
  )
}
/*
const Progress = ({ done }) => {
  const [style, setStyle] = React.useState({})

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`
    }

    setStyle(newStyle)
  }, 200)

  return (
    <div className="progress">
      <div className="progress-done" style={style}>
        {done}%
      </div>
    </div>
  )
}
export default Progress
*/
