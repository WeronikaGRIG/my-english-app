
import { useState } from 'react';
import styles from './TableList.module.css';

export default function TableList({ word, transcript, translation }) {

    const [isChanged, setChanged] = useState(true);

    const handleClick = () => {
        setChanged(!isChanged)
    }

    return (
        <tr className={isChanged ? styles.tr : styles.tr__active}>
            <td className={styles.td}><p>{word}</p></td>
            <td className={styles.td}><p>{transcript}</p></td>
            <td className={styles.td}><p>{translation}</p></td>

            {/* вынести в отдельные компоненты кнопки */}
            <div className={styles.button}>
                <button className={styles.td__btn} onClick={handleClick}>Знаю</button>
                <button className={styles.td__btn}>Учить</button>
            </div>

        </tr>

    )
}
