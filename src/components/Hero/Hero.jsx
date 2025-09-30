import { useState } from "react";
import styles from "./Hero.module.css";

// Ícones do LinkedIn e GitHub
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.subtitle}>OLÁ, EU SOU 👋</p>
        <h1 className={styles.title}>
          Júlia <br /> Vitória
        </h1>
        <h2 className={styles.role}>Desenvolvedora FullStack</h2>
        <p className={styles.description}>
          Tenho 17 anos, sou estudante de programação, gosto de tecnologia e desenvolvimento de soluções digitais. Busco aprender novas linguagens e aplicando os conhecimentos práticos que unem a criatividade e atenção aos detalhes. Vamos construir isso comigo?
        </p>

        <div className={styles.buttons}>
          <button onClick={toggleModal} className={styles.primaryBtn}>
            Fale Comigo
          </button>
          <a href="https://www.linkedin.com/in/julia-vitoria-santos-santana-07ab5a37b"  className={styles.secondaryBtn}>
            Meu LinkedIn
          </a>
        </div>

        <div className={styles.socials}>
          <a href="https://www.linkedin.com/in/julia-vitoria-santos-santana-07ab5a37b" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/santossantanajulia" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>

      <div className={styles.imageWrapper}>
        <img
          src="fotominha.jpg" 
          alt="Júlia Vitória sorrindo"
          className={styles.image}
        />
      </div>

      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h3>Entre em contato 💌</h3>
            <p>Email: <strong>vitoriasantossantanajulia@gmail.com</strong></p>
            <button onClick={toggleModal} className={styles.closeBtn}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
