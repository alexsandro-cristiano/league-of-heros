import Logo from 'assets/images/logo.png';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss';

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
              <NavLink to="/">Início</NavLink>
            </li>
            <li>
              <NavLink to="myleague">Minha Liga</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
