import styles from '../../styles/elementstyles/Buttonsearch.module.css'

function Buttonsearch({text}){
    return(
        <div className={styles.buttonsearch}>
            <button>{text}</button>
        </div>
    )
}

export default Buttonsearch