
import styles from './Home.module.css';

import Header from '../Header/Header';

import Card from '../Card/Card';


export default function Home() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <div className={styles.list}>
                            <div className={styles.list__item}>
                                <h3 className={styles.list__item_title}>Выбери технику изучения</h3>
                            </div>
                            <Card />
                        </div>
                    </div>
                </div>
            </main >
        </>

    )
}
