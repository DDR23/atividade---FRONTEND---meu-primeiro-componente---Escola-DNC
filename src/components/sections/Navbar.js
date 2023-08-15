import { CgMenuGridO } from "react-icons/cg";
import styles from '../styles/Navbar.module.css'
import perfil from '../images/perfil.jpg'

function Navbar(){
    return(
        <div id="navbar" className={styles.navbar}>
            <div className={styles.navbarcontent}>
                <div>
                    <ul>
                        <li><a className={styles.underline} href="#">Gmail</a></li>
                        <li><a className={styles.underline} href="#">Imagens</a></li>
                    </ul>
                </div>
                <div className={styles.navbaricon}>
                    <a className={styles.backradius} href="#"><CgMenuGridO color="#FFFFFF" size={24}/></a>
                </div>
                <div className={styles.navbarperfil}>
                    <a className={styles.backradius} href="#"><img src={perfil}/></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar