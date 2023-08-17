import styles from '../styles/Footer.module.css'

function Footer(){
    return(
        <div className={styles.footer}>
            <div id={styles.top} className={styles.footerbar}>
                <p>Brasil</p>
            </div>
            <div id={styles.bottom} className={styles.footerbar}>
                <div className={styles.aside}>
                    <p>Sobre</p>
                    <p>Publicidade</p>
                    <p>Negócios</p>
                    <p>Como funciona a Pesquisa</p>
                </div>
                <div className={styles.aside}>
                    <p>Privacidade</p>
                    <p>Termos</p>
                    <p>Configurações</p>
                </div>
            </div>
        </div>
    )
}

export default Footer