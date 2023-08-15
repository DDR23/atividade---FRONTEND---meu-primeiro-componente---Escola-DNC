import styles from '../styles/Googlename.module.css'
import googlelogo from '../images/googlelogo.png'
import Buttonsearch from './elements/Buttonsearch.js'
import Inputsearch from './elements/Inputsearch'

function Googlename(){
    return(
        <div className={styles.googlemain}>
            <div className={styles.googlelogobg}>
                <img src={googlelogo}></img>
            </div>
            <div className={styles.googlesearch}>
                <div className={styles.googlesearchbar}>
                    <Inputsearch/>
                </div>
                <div className={styles.googlesearchbutton}>
                    <Buttonsearch text='Pesquisa Google'/>
                    <Buttonsearch text='Estou com sorte'/>
                </div>
            </div>
        </div>
    )
}

export default Googlename