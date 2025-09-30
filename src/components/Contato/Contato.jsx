import styles from './Contato.module.css';
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contato() {
  return (
    <section id="contato" className={styles.contato}>
      <h2>Contato</h2>
      <p>Entre em contato comigo através das redes abaixo:</p>

      <div className={styles.links}>
        <a href="https://www.linkedin.com/in/julia-vitoria-santos-santana-07ab5a37b" target="_blank" rel="noopener noreferrer">
          <FaLinkedin /> LinkedIn
        </a>
        <a href="https://github.com/santossantanajulia" target="_blank" rel="noopener noreferrer">
          <FaGithub /> GitHub
        </a>
        <a href="mailto:vitoriasantossantanajulia@gmail.com">
          <FaEnvelope /> Email
        </a>
      </div>
    </section>
  );
}

