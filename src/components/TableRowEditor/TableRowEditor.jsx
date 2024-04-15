import { useState } from 'react';

import styles from './TableRowEditor.module.css'

export default function TableRowEditor({ onCancelEdit, onFieldChange, onSave, newWord, setNewWord, handleAddWord }) {
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'word' || name === 'transcription' || name === 'translation') {
            onFieldChange(name, value);

            //сосстояние newWord при изменении поля ввода 
            setNewWord(prevState => ({
                ...prevState,
                [name]: value
            }));

            //состояние ошибок при изменении поля ввода
            setErrors(prevErrors => ({
                ...prevErrors,
                [name]: value.trim() === ''
            }));
        }
    };

    const handleSave = () => {
        if (Object.values(errors).some(error => error)) {
            console.log('Ошибка: Не все поля заполнены.');
            return;
        }
        onSave();
        handleAddWord(newWord);
        onCancelEdit();
    };


    return (
        <tr className={styles.tr__edit}>
            <td className={styles.td__edit}>
                <input
                    type="text"
                    name="word"
                    className={`${styles.td__input} ${errors.word ? styles.input__error : ''}`}
                    value={newWord.word || ''}
                    onChange={handleChange} />
            </td>
            <td className={styles.td__edit}>
                <input
                    type="text"
                    name="transcription"
                    className={`${styles.td__input} ${errors.transcription ? styles.input__error : ''}`}
                    value={newWord.transcription || ''}
                    onChange={handleChange} />
            </td>
            <td className={styles.td__edit}>
                <input type="text"
                    name="translation"
                    className={`${styles.td__input} ${errors.translation ? styles.input__error : ''}`}
                    value={newWord.translation || ''}
                    onChange={handleChange} />
            </td>

            <td className={styles.button}>

                <button className={styles.td__btn}
                    onClick={handleSave}
                >Сохранить</button>
                <button className={styles.td__btn}
                    onClick={onCancelEdit}>Отмена</button>

            </td>
        </tr>
    )
}
