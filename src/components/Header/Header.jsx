
import styles from './Header.module.css';
import NavBar from '../NavBar/NavBar';

export default function Header() {
    return (
        <>
            <NavBar />
            <header className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.header__wrapper}>
                        <h1 className={styles.header__title}>
                            <strong>Learn English <em>with Me</em></strong>
                        </h1>
                        <div className={styles.header__text}>
                            <p>Приготовтесь к увлекательному путешествию по изучению английского языка!</p>
                        </div>
                        <button className={styles.header__btn}><a href="#!">Войти</a></button>
                    </div>
                </div>
            </header>
        </>
    )
}
