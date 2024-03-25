
import styles from './TableList.module.css';

export default function TableList({ word, transcript, translation }) {
    return (
        <tr className={styles.tr}>
            <td className={styles.td}><input type="checkbox" /></td>
            <td className={styles.td}><p>{word}</p></td>
            <td className={styles.td}><p>{transcript}</p></td>
            <td className={styles.td}><p>{translation}</p></td>
        </tr>
    )
}
