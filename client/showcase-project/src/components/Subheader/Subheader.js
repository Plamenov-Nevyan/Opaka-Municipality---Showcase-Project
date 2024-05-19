import styles from './css/subheader.module.css'

export function Subheader(){

    return (
        <div className={styles['subheader-main']}>
           <div className={styles['subheader-section-option']}>
                <h3 className={styles['option-heading']}>Шаблони</h3>
           </div>
           <div className={styles['subheader-section-option']}>
                <h3 className={styles['option-heading']}>Документи</h3>
           </div>
           <div className={styles['subheader-section-option']}>
                <h3 className={styles['option-heading']}>Проекти</h3>
           </div>
           <div className={styles['subheader-section-option']}>
                <h3 className={styles['option-heading']}>Служители</h3>
           </div>
           <div className={styles['subheader-section-option']}>
                <h3 className={styles['option-heading']}>Прикачване към база данни</h3>
           </div>
        </div>
    )
}