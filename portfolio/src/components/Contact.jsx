import styles from "../App.module.css"

export default function Contact() {

  function handleSubmit(event) {
    event.preventDefault()

    alert("Mensagem enviada com sucesso!")
  }

  return (
    <section id="contato" className={styles.section}>
      <h2>Contato</h2>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Seu nome"
          required
        />

        <input
          type="email"
          placeholder="Seu e-mail"
          required
        />

        <textarea
          placeholder="Sua mensagem"
          required
        ></textarea>

        <button type="submit">
          Enviar
        </button>
      </form>

      <div className={styles.social}>
        <a
          href="https://github.com/victoraugusto1735-star"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/victor-augusto-6b49b6409/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

        <a
          href="https://www.instagram.com/vtinh0w0_dev/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
      </div>
    </section>
  )
}