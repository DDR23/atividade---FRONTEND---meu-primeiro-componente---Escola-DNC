import styles from '../../styles/elementstyles/Inputsearch.module.css'

function Inputsearch(){
    return(
        <div className={styles.inputsearch}>
            <div className={styles.iconsearch}>
                <a>o</a>
            </div>
            <input className={styles.inputsearchinput} type="text" placeholder="Quantos mundiais o Palmeiras tem?"></input>
            <div className={styles.iconsearch}>
                <a>o</a>
            </div>
            <div className={styles.iconsearch}>
                <a>o</a>
            </div>
            <div className={styles.iconsearch}>
                <a>o</a>
            </div>
        </div>
    )
}

export default Inputsearch