import styles from "../App.module.css"

export default function Contact() {
  return (
    <section id="contato" className={styles.section}>
      <h2>Contato</h2>

      <form className={styles.form}>
        <input type="text" placeholder="Seu nome" />
        <input type="email" placeholder="Seu e-mail" />
        <textarea placeholder="Sua mensagem"></textarea>
        <button type="submit">Enviar</button>
      </form>

      <div className={styles.social}>
        <a href="https://github.com/victoraugusto1735-star">GitHub</a>
        <a href="https://www.linkedin.com/in/victor-augusto-6b49b6409/">LinkedIn</a>
        <a href="https://www.instagram.com/vtinh0w0_dev/">Instagram</a>
      </div>
    </section>
  )
}