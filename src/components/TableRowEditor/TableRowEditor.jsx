

import styles from './TableRowEditor.module.css'

export default function TableRowEditor({
    onCancelEdit,
    onFieldChange,
    onSave,
    editedFields,
    errors
}) {

    //изменение состояния поля ввода
    const handleChange = (e) => {
        const { name, value } = e.target;
        onFieldChange(name, value);
    };

    const isBtnDisabled = Object.values(errors).some(error => error)

    return (
        <tr className={styles.tr__edit}>
            <td className={styles.td__edit}>
                <input
                    type="text"
                    name="word"
                    className={`${styles.td__input} ${errors.word ? styles.input__error : ''}`}
                    value={editedFields.word || ''}
                    onChange={handleChange} />
            </td>
            <td className={styles.td__edit}>
                <input
                    type="text"
                    name="transcript"
                    className={`${styles.td__input} ${errors.transcript ? styles.input__error : ''}`}
                    value={editedFields.transcript || ''}
                    onChange={handleChange} />
            </td>
            <td className={styles.td__edit}>
                <input type="text"
                    name="translation"
                    className={`${styles.td__input} ${errors.translation ? styles.input__error : ''}`}
                    value={editedFields.translation || ''}
                    onChange={handleChange} />
            </td>

            <button
                className={styles.td__btn}
                onClick={onSave}
                disabled={!isBtnDisabled}>Сохранить</button>
            <button
                className={styles.td__btn}
                onClick={onCancelEdit}>Отмена</button>
        </tr>
    )
}