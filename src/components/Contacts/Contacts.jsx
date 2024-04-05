import styles from './Contacts.module.css';

export default function Contacts() {
    return (
        <main className={styles.main}>
            <div className={styles.container}>


                <div className={styles.wrapper}>
                    <h1 className={styles.title}>Контакты</h1>
                    <ul className={styles.content}>
                        <li className={styles.content__item}>
                            <h2 className={styles.title}>Локация</h2>
                            <p>Poland</p>
                        </li>
                        <li className={styles.content__item}>
                            <h2 className={styles.title}>Telegram / WhatsApp</h2>
                            <p><a href="tel:+480000000">+48 (00) 000 000</a></p>
                        </li>
                        <li className={styles.content__item}>
                            <h2 className={styles.title}>Email</h2>
                            <p><a href="mailto:veronikaudot@gmail.com">veronikaudot@gmail.com</a></p>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    )
}
