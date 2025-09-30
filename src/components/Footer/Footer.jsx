import styles from './Footer.module.css';
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Júlia Vitória. Todos os direitos reservados.</p>
      <div className={styles.socials}>
        <a href="https://www.linkedin.com/in/julia-vitoria-santos-santana-07ab5a37b" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/santossantanajulia" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
    </footer>
  );
}
