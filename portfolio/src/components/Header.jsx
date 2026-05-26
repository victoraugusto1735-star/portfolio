import styles from "../App.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <h2> ☕Meu Portfólio</h2>

      <nav>
        <a href="#inicio">Início☕</a>
        <a href="#sobre">Sobre☕</a>
        <a href="#projetos">Projetos☕</a>
        <a href="#habilidades">Habilidades☕</a>
        <a href="#contato">Contato☕</a>
      </nav>
    </header>
  )
}