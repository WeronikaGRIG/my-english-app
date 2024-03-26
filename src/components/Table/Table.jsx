
import TableList from '../TableList/TableList';
import { list } from '../../list';
import styles from './Table.module.css';

export default function Table() {
    return (
        <div className={styles.tables}>
            <div className={styles.container}>
                <h2>Английские слова по темам с трансскрипцией и переводом</h2>

                <table className={styles.table}>
                    <tbody className={styles.tbody}>
                        <tr className={styles.tr__header}>
                            <td className={styles.td__header}><strong>Слово</strong></td>
                            <td className={styles.td__header}><strong>Транскрипция</strong></td>
                            <td className={styles.td__header}><strong>Перевод</strong></td>
                        </tr>
                        {list.map((table, i) => {
                            return (
                                <TableList key={i} {...table} />
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div >
    )
}
