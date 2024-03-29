import styles from './TableHeader.module.css';

export default function TableHeader() {
    return (
        <>
            <tr className={styles.tr__header}>
                <td className={styles.td__header}><strong>Слово</strong></td>
                <td className={styles.td__header}><strong>Транскрипция</strong></td>
                <td className={styles.td__header}><strong>Перевод</strong></td>
            </tr>
        </>
    )

}
