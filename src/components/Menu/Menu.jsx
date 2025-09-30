import styles from './Menu.module.css';

export default function Menu(){
  return(
    <header className={styles.containerMenu}>
      <p className={styles.logo}>👩🏾‍💻 Júlia Vitória</p>
      <ul className={styles.menu}>
        <li><a href="#hero">Sobre mim</a></li>
        <li><a href="#projetos">Meus projetos</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </header>
  )
}
