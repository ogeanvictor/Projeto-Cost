import {Link} from 'react-router-dom'

import Container from './Container'
import logo from '../../img/costs_logo.png'

import styles from './Navbar.module.css'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/"><img src={logo} alt="" /></Link>
                <ul className={styles.list}>
                    <li className={styles.item}><Link className={styles.links_navbar} to="/">Home</Link></li>
                    <li className={styles.item}><Link className={styles.links_navbar} to="/projects">Projetos</Link></li>
                    <li className={styles.item}><Link className={styles.links_navbar} to="/company">Empresa</Link></li>
                    <li className={styles.item}><Link className={styles.links_navbar} to="/contact">Contato</Link></li>
                </ul>
            </Container>
      </nav>
    )
}

export default Navbar