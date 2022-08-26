import { Link } from 'react-router-dom'
import styles from './Navbar.module.scss'

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h3 className={styles.logo}>League of Hero</h3>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/myleague">MyLeague</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}
