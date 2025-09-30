import styles from './Menu.module.css';

export default function Menu(){
  return(
    <header className={styles.containerMenu}>
      <p className={styles.logo}>👩🏾‍💻Tábata Macedo</p>
      <ul className={styles.menu}>
        <li>Sobre mim</li>
        <li>Meus projetos</li>
        <li>Contato</li>
      </ul>
    </header>
  )
}