import { useEffect, useState } from 'react'
import styles from './Progressbar.module.scss'

interface IProgessbarProps {
  done?: number | string
  title?: string
}

export function Progressbar({ done, title }: IProgessbarProps) {
  const [style, setStyle] = useState({})
  if (done === 'null') {
    done = ''
  }

  useEffect(() => {
    const modifiedStyle = {
      opacity: 1,
      width: `${done}%`
    }
    setStyle(modifiedStyle)
  }, [])

  return (
    <>
      <label className={styles.label}>{title}</label>
      <div className={styles.progress}>
        <div className={styles.progressDone} style={style}>
          {done}
        </div>
      </div>
    </>
  )
}
