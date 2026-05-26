import styles from "../App.module.css"
import { projects } from "../data/projects"

export default function Projects() {
  return (
    <section id="projetos" className={styles.section}>
      <h2>Projetos</h2>

      <div className={styles.projects}>
        {projects.map((project) => (
          <div className={styles.card} key={project.id}>
            <img src={project.image} alt={project.title} />

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className={styles.tags}>
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <div className={styles.links}>
              <a href={project.github}>GitHub</a>
              <a href={project.demo}>Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}