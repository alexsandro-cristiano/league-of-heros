import { FiGithub, FiLinkedin } from 'react-icons/fi'
import styles from './Footer.module.scss'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.direitos}>
        <p>&copy; 2022 | Desenvolvido por Alexsandro Silva.</p>
      </section>
      <section className={styles.midiaSocial}>
        <h3>Conecte-se</h3>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/alexsandro-cristiano"
              target="_blank"
            >
              <FiLinkedin size={24} />
            </a>
          </li>
          <li>
            <a href="https://github.com/alexsandro-cristiano" target="_blank">
              <FiGithub size={24} />
            </a>
          </li>
        </ul>
      </section>
    </footer>
  )
}
