import {AuthForm} from '../AuthForm/AuthForm'
import styles from './css/home.module.css'

export function Home(){

    return (
        <section className={styles['home-section']}>
            <AuthForm />
        </section>
    )
}