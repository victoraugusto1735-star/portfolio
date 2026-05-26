import styles from "../App.module.css"

export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind",
    "Git",
    "GitHub",
    "APIs",
    "Responsividade",
  ]

  return (
    <section id="habilidades" className={styles.section}>
      <h2>Habilidades</h2>

      <div className={styles.skills}>
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </section>
  )
}