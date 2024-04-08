
import TableList from '../TableList/TableList';
import { list } from '../../list';
import styles from './Table.module.css';
import TableHeader from '../TableHeader/TableHeader';
import TableRowEditor from '../TableRowEditor/TableRowEditor';

export default function Table() {
    return (

        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <h3 className={styles.title}>Самоучитель</h3>
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
            </div>
        </main>
    )
}
