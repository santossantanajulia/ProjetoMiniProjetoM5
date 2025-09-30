import { useState } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.subtitle}>OLÁ, EU SOU 👋</p>
        <h1 className={styles.title}>
          Tábata <br /> Macedo
        </h1>
        <h2 className={styles.role}>
          Desenvolvedora Fullstack <span>|</span> Educação
        </h2>
        <p className={styles.description}>
          Transformo ideias em experiências digitais modernas, acessíveis e
          impactantes. Vamos construir algo incrível juntos?
        </p>

        <div className={styles.buttons}>
          <button onClick={toggleModal} className={styles.primaryBtn}>
            Fale Comigo
          </button>
          <a href="/curriculo.pdf" className={styles.secondaryBtn}>
            Meu currículo
          </a>
        </div>
      </div>

      <div className={styles.imageWrapper}>
        <img
          src="/foto.png" // 👉 coloque sua imagem aqui na pasta public
          alt="Tábata Macedo sorrindo com microfone e computador ao fundo"
          className={styles.image}
        />
      </div>

      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h3>Entre em contato 💌</h3>
            <p>Email: <strong>tabata.macedo@email.com</strong></p>
            <button onClick={toggleModal} className={styles.closeBtn}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
