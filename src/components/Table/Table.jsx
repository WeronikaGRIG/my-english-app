
import TableList from '../TableList/TableList';
import { list } from '../../list';
import styles from './Table.module.css';
import TableHeader from '../TableHeader/TableHeader';
import TableRowEditor from '../TableRowEditor/TableRowEditor';

export default function Table() {
    return (
        <div className={styles.tables}>
            <div className={styles.container}>
                <h3 className={styles.title}>Английские слова по темам с трансскрипцией и переводом</h3>
                <p className={styles.descr}>В этом модуле представлены слова с транскрипцией и переводом в табличной форме. Выбирай слова для заучивания и повторяй методом интервального повторения. А также добавляй и сохраняй свои слова.</p>

                <table className={styles.table}>
                    <tbody className={styles.tbody}>
                        <TableHeader />
                        <TableRowEditor />
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
