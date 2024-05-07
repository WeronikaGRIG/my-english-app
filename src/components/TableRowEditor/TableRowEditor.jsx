

import styles from './TableRowEditor.module.css'

export default function TableRowEditor() {

    return (
        <tr className={styles.tr__edit}>
            <td className={styles.td__edit}>
                <input
                    type="text"
                    placeholder="Слово на английском ..."
                    name="word"
                    className={styles.td__input} />
            </td>
            <td className={styles.td__edit}>
                <input
                    type="text"
                    placeholder="Транскрипция ..."
                    name="transcript"
                    className={styles.td__input} />
            </td>
            <td className={styles.td__edit}>
                <input
                    type="text"
                    placeholder="Перевод ..."
                    name="translation"
                    className={styles.td__input} />
            </td>

            <button
                className={styles.td__btn}>Сохранить</button>
            <button
                className={styles.td__btn}>Отмена</button>
        </tr>
    )
}