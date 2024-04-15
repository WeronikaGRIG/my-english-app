import { data } from '../../data.js';

import CardList from '../CardList/CardList.jsx';

import styles from './Card.module.css';

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
