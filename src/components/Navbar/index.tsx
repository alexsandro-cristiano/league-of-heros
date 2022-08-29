import Logo from 'assets/images/logo.png'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.scss'

export function Navbar() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src={Logo} alt="Logo" title="Logo" />
          <span>Liga de Heróis</span>
        </div>
        <nav className={styles.navbar}>
          <ul>
            <li>
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="myleague">Minha Liga</Link>
            </li>
            <li>
              <Link to="about">Sobre</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
