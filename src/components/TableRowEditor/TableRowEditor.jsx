import { useState } from 'react';
import styles from './TableRowEditor.module.css'

export default function TableRowEditor({ editedFields, setEditedFields, onCancelEdit, onFieldChange, onSave }) {
    const [errors, setErrors] = useState({});
    const [isEmptyField, setEmptyField] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'word' || name === 'transcription' || name === 'translation') {
            onFieldChange(name, value);
            setEditedFields(prevFields => ({ ...prevFields, [name]: value }));
        }

        const isEmpty = value.trim() === '';

        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: isEmpty
        }));

        setEmptyField(isEmpty);
    };

    const handleSave = () => {
        if (isEmptyField) {
            console.log('Ошибка: Не все поля заполнены.');
            return;
        }
        onSave();
    };


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
                    name="transcription"
                    className={`${styles.td__input} ${errors.transcription ? styles.input__error : ''}`}
                    value={editedFields.transcription || ''}
                    onChange={handleChange} />
            </td>
            <td className={styles.td__edit}>
                <input type="text"
                    name="translation"
                    className={`${styles.td__input} ${errors.translation ? styles.input__error : ''}`}
                    value={editedFields.translation || ''}
                    onChange={handleChange} />
            </td>

            <td className={styles.button}>

                <button className={styles.td__btn}
                    onClick={handleSave}
                    disabled={Object.values(errors).some(error => error)}>Сохранить</button>
                <button className={styles.td__btn}
                    onClick={onCancelEdit}>Отмена</button>

            </td>
        </tr>
    )
}
