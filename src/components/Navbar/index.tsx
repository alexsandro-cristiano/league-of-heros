import styles from './Navbar.module.scss'

export function Navbar() {
  return (
    <header className={styles.header}>
      <h1>League of Hero</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>MyLeague</li>
        </ul>
      </nav>
    </header>
  )
}
