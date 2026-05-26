import styles from "../App.module.css"

export default function About() {
  return (
    <section id="sobre" className={styles.section}>
      <h2>Sobre Mim</h2>

      <div className={styles.about}>
        <img src="/perfil.png" alt="Foto de perfil" />

        <p>
          Sou estudante de desenvolvimento web e venho praticando projetos com
          React, Next.js, APIs, responsividade e organização de código. Meu foco
          é evoluir como desenvolvedor Front-end e criar aplicações modernas.
        </p>
      </div>
    </section>
  )
}