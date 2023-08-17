import styles from '../../styles/elementstyles/Inputsearch.module.css'
import { IoIosSearch, IoMdMic } from 'react-icons/io'
import { AiOutlineCamera } from "react-icons/ai"
import { LiaKeyboardSolid } from "react-icons/lia";

function Inputsearch(){
    return(
        <div className={styles.inputsearch}>
            <label className={styles.iconsearch} for="caixa"><IoIosSearch size={20}/></label>
            <input id="caixa" className={styles.inputsearchinput} type="text" placeholder="Que é a minha pitiquinha?"></input>
            <div className={styles.iconsearch}>
                <a href='#'><LiaKeyboardSolid size={20}/></a>
            </div>
            <div className={styles.iconsearch}>
                <a href='#'><IoMdMic size={20}/></a>
            </div>
            <div className={styles.iconsearch}>
                <a href='#'><AiOutlineCamera size={20}/></a>
            </div>
        </div>
    )
}

export default Inputsearch