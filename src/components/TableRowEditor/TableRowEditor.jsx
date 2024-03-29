import styles from './TableRowEditor.module.css'

export default function TableRowEditor() {
    return (
        <tr className={styles.tr__edit}>
            <td className={styles.td__edit}>
                <input type="text" name="text" className={styles.td__input} pattern="\d+" placeholder="" />
            </td>
            <td className={styles.td__edit}>
                <input type="text" name="text" className={styles.td__input} pattern="\d+" placeholder="" />
            </td>
            <td className={styles.td__edit}>
                <input type="text" name="text" className={styles.td__input} pattern="\d+" placeholder="" />
            </td>

            {/* вынести в отдельные компоненты кнопки */}
            <div className={styles.button}>
                <button className={styles.td__btn}>Добавить слово</button>
            </div>
        </tr>
    )
}
