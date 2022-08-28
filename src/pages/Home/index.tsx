import { Card } from '../../components/Card'

import styles from './Home.module.scss'
export function Home() {
  return (
    <>
      <h1>Introdução</h1>

      <h2>Conheça nossos herois</h2>
      <div className={styles.wrapperCards}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  )
}
