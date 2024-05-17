import { list } from '../../list';
import TableList from '../TableList/TableList';
import TableHeader from '../TableHeader/TableHeader';
import TableRowEditor from '../TableRowEditor/TableRowEditor';

import styles from './Table.module.css';

export default function Table() {

    return (

        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <h3 className={styles.title}>Самоучитель</h3>


                    <h3>
                        Добавить слово
                    </h3>

                    <TableRowEditor />

                    <table className={styles.table}>
                        <tbody className={styles.tbody}>
                            <TableHeader />

                            {list.map((word, index) => {
                                return (
                                    <TableList key={index} {...word} />
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    )
}