
import TableList from '../TableList/TableList';
import { list } from '../../list';
import styles from './Table.module.css';

export default function Table() {
    return <div className={styles.tables}>
        <div className={styles.container}>
            <table className={styles.table}>
                <tbody className={styles.tbody}>
                    <tr className={styles.tr}>
                        <td className={styles.td}><strong> # </strong></td>
                        <td className={styles.td}><strong>Слово</strong></td>
                        <td className={styles.td}><strong>Транскрипция</strong></td>
                        <td className={styles.td}><strong>Перевод</strong></td>
                    </tr>
                    {list.map((table, i) => {
                        return (
                            <TableList key={i} {...table} />
                        )
                    })}
                </tbody>
            </table>
        </div>

    </div >;
}
