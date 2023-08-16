import styles from '../../styles/elementstyles/Inputsearch.module.css'
import { IoIosSearch, IoMdMic } from 'react-icons/io'
import { AiOutlineCamera } from "react-icons/ai"
import { LiaKeyboardSolid } from "react-icons/lia";

function Inputsearch(){
    return(
        <div className={styles.inputsearch}>
            <div className={styles.iconsearch}>
                <IoIosSearch size={20}/>
            </div>
            <input className={styles.inputsearchinput} type="text" placeholder="Quantos mundiais o Palmeiras tem?"></input>
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