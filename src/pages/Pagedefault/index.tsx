import { Outlet } from 'react-router-dom'
import styles from './Pagedefault.module.scss'

export function Pagedefault() {
  return (
    <main className={styles.main}>
      <Outlet />
    </main>
  )
}
