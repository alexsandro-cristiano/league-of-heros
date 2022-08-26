import styles from './Navbar.module.scss'

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h3 className={styles.logo}>League of Hero</h3>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/myleague">MyLeague</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  )
}
