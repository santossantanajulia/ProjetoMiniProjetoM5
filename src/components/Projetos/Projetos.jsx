import styles from './Projetos.module.css';

export default function Projetos() {
  const projetos = [
    {
      nome: "Cadastro de Tênis",
      descricao: "Este projeto foi criado com o intuito de adicionar, editar e deletar cards que cadastrem sapatos, com imagem, descrição e valor.",
      link: "https://github.com/santossantanajulia/MiniProjetoM3.git",
      imagem: "/tenis.png" // 👉 coloque uma imagem representativa na pasta public
    }
    // Você pode adicionar mais projetos aqui seguindo o mesmo formato
  ];

  return (
    <section id="projetos" className={styles.projetos}>
      <h2>Meus Projetos</h2>
      <div className={styles['projetos-lista']}>
        {projetos.map((projeto, index) => (
          <div key={index} className={styles['projeto-card']}>
            <img src={projeto.imagem} alt={projeto.nome} className={styles.imagem} />
            <h3>{projeto.nome}</h3>
            <p>{projeto.descricao}</p>
            <a href={projeto.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
              Ver Projeto
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
