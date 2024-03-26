
import styles from './Home.module.css';
import Card from '../Card/Card';
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
                        {/* вынести кнопки в отдельный компонент и назвать одинаково стили*/}
                        <div className={styles.levels}>
                            <button className={styles.levels__btn}>Начинающий</button>
                            <button className={styles.levels__btn}>Средний</button>
                            <button className={styles.levels__btn}>Продвинутый</button>
                        </div>
                        {/* вынести карточки в отдельный компонент, не забыть про импорты*/}
                        <Card />
                        <Table />

                    </div>
                </div>
            </div>
        </main >
    )
}
