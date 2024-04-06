import { Link } from 'react-router-dom'
import styles from './NavBar.module.css';
import { useState, useEffect } from 'react';

export default function NavBar() {

    const [isSticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 0) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`${styles.nav} ${isSticky ? styles.sticky : ''}`}>
            <div className={styles.container}>
                <div className={styles.nav__row}>
                    <Link to="/" className={styles.logo}><strong>Learn<em> English</em></strong>
                    </Link>

                    {/* вынести кнопку в отдельный компонент */}

                    <button className={styles.mode__btn}><a href="#!" className={styles.btn}>Войти</a></button>
                    <button className={styles.mode__btn}><a href="#!">Авторизоваться</a></button>

                    <ul className={styles.nav__list}>
                        <li className={styles.nav__list_item}>
                            <Link to="/" className={styles.nav__list_link}>Главная</Link></li>
                        <li className={styles.nav__list_item}>
                            <Link to="/vocabs" className={styles.nav__list_link}>Учить слова</Link></li>
                        <li className={styles.nav__list_item}>
                            <Link to="/contacts" className={styles.nav__list_link}>Контакты</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}