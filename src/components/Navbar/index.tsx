import Logo from 'assets/images/logo.png'
import styles from './Navbar.module.scss'

export function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={Logo} alt="Logo" title="Logo" />
        <span>Liga de Heróis</span>
      </div>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <a href="#">Início</a>
          </li>
          <li>
            <a href="#">Minha Liga</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
