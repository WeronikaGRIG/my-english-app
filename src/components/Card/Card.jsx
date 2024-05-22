

import { useContext } from 'react';
import { WordContext } from '../../context/WordContext.jsx';
// import { data } from '../../data.js';

import CardList from '../CardList/CardList.jsx';

import styles from './Card.module.css';


export default function Card() {

    const { words } = useContext(WordContext)

    return (
        <div className={styles.container}>

            <ul className={styles.card}>
                {words.map((word, id) => {
                    return (
                        <CardList key={id} {...word} />
                    )
                })}
            </ul>
        </div>

    )
}
