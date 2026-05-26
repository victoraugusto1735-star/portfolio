import styles from "./App.module.css"
import Header from "./components/Header"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"

export default function App() {
    return (
        <div className={styles.App}>
            <Header />
            
            <main>
                <selection id='inicio' className={styles.hero}>
                    <h1>oii, eu sou o Victor Augusto</h1>
                    <p>
                        Desenvolvedor Front-end em formação, criando projetos com React,
                        JavaScript, HTML, CSS e boas práticas de desenvolvimento.
                    </p>
                </selection>

                <About />
                <Projects />
                <Skills />
                <Contact />
            </main>
        </div>
    )
}