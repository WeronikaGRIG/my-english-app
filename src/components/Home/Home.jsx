
import styles from './Home.module.css';
import Card from '../Card/Card';
import Vocab from '../Vocab/Vocab';
import Table from '../Table/Table';



export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.list}>
                        <div className={styles.list__item}>
                            <h3 className={styles.list__item_title}>Выбери технику изучения</h3>
                            <p className={styles.list__item_text}>Выбери свой уровень и технику, которую будешь сегодня изучать. </p>
                        </div>
                        {/* вынести карточки в отдельный компонент, не забыть про импорты*/}
                        <Card />
                        {/* ДОМАШНЕЕ ЗАДАНИЕ 24week (перенести в отдельную папку и добавить пропсы) */}
                        <Vocab />
                        <Table />


                    </div>
                </div>
            </div>
        </main >
    )
}
