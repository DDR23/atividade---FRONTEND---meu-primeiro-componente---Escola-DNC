import styles from '../styles/Footer.module.css'

function Footer(){
    return(
        <div className={styles.footer}>
            <div id={styles.top} className={styles.footerbar}>
                <p>Brasil</p>
            </div>
            <div id={styles.bottom} className={styles.footerbar}>
                <div className={styles.aside}>
                    <a href='#'><p>Sobre</p></a>
                    <a href='#'><p>Publicidade</p></a>
                    <a href='#'><p>Negócios</p></a>
                    <a href='#'><p>Como funciona a Pesquisa</p></a>
                </div>
                <div className={styles.aside}>
                    <a href='#'><p>Privacidade</p></a>
                    <a href='#'><p>Termos</p></a>
                    <a href='#'><p>Configurações</p></a>
                </div>
            </div>
        </div>
    )
}

export default Footer