import { CgMenuGridO } from "react-icons/cg";
import styles from '../styles/Navbar.module.css'
import perfil from '../images/perfil.jpg'

function Navbar(){
    return(
        <div id="navbar" className={styles.navbar}>
            <div className={styles.navbarcontent}>
                <div>
                    <ul>
                        <li>Gmail</li>
                        <li>Imagens</li>
                    </ul>
                </div>
                <div className={styles.navbaricon}>
                    <a href="#"><CgMenuGridO color="#FFFFFF" size={24}/></a>
                </div>
                <div className={styles.navbarperfil}>
                    <img src={perfil}/>
                </div>
            </div>
        </div>
    )
}

export default Navbar