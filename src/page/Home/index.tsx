import { Card } from '../../components/Card'

import styles from './Home.module.scss'
export function Home() {
  return (
    <main className={styles.main}>
      <Card />
      <Card />
      <Card />
      <Card />
    </main>
  )
}
