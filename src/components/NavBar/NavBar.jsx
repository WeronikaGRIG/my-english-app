
import styles from './NavBar.module.css';

export default function NavBar() {

    return (
        <nav className={styles.nav}>
            <div className={styles.container}>
                <div className={styles.nav__row}>
                    <a href="./index.html" className={styles.logo}><strong>Learn<em> English</em></strong></a>

                    {/* вынести кнопку в отдельный компонент */}

                    <button className={styles.mode__btn}><a href="#!" className={styles.btn}>Войти</a></button>
                    <button className={styles.mode__btn}><a href="#!">Авторизоваться</a></button>

                    <ul className={styles.nav__list}>
                        <li className={styles.nav__list_item}><a href="./index.html" className={styles.nav__list_link}>Главная</a></li>
                        <li className={styles.nav__list_item}><a href="./vocab.html" className={styles.nav__list_link}>Учить слова</a></li>
                        <li className={styles.nav__list_item}><a href="./contacts.html" className={styles.nav__list_link}>Контакты</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}