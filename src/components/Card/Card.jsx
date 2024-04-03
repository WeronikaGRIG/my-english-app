
import styles from './Card.module.css';
import CardList from '../CardList/CardList.jsx';
import { data } from '../../data.js';


export default function Card() {
    return (
        <div className={styles.container}>

            <ul className={styles.card}>
                {data.map((card, i) => {
                    return (
                        <CardList key={i} {...card} />
                    )
                })}
            </ul>
        </div>

    )
}
