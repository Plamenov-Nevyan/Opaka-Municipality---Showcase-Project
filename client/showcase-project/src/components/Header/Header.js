import styles from './css/header.module.css'
import logoImg from './images/logo.png'

export function Header(){

    return (
        <header className={styles['main-header']}>
            <div className={styles['left']}>
                <div className={styles['left-content']}>
                    <div className={styles['logo-container']}>
                        <img src={logoImg} className={styles.logo}/>
                    </div>
                    <div className={styles['headings']}>
                        <h4 className={styles['heading-top']}>Община Опака</h4>
                        <h4 className={styles['heading-bottom']}>Административен Портал</h4>
                    </div>
                </div>
            </div>
            <div className={styles['right']}>
                
            </div>
        </header>
    )
}