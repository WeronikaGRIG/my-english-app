import { useState } from 'react';

import styles from './TableRowEditor.module.css'

export default function TableRowEditor({ onCancelEdit, onFieldChange, onSave, newWord, setNewWord, handleAddWord }) {
    const [errors, setErrors] = useState({});

    //изменение состояния поля ввода
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'word' || name === 'transcript' || name === 'translation') {
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

    //сохранение нового поля, проверка наличия ошибок валидации
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
                    name="transcript"
                    className={`${styles.td__input} ${errors.transcript ? styles.input__error : ''}`}
                    value={newWord.transcript || ''}
                    onChange={handleChange} />
            </td>
            <td className={styles.td__edit}>
                <input type="text"
                    name="translation"
                    className={`${styles.td__input} ${errors.translation ? styles.input__error : ''}`}
                    value={newWord.translation || ''}
                    onChange={handleChange} />
            </td>

            <button className={styles.td__btn}
                onClick={handleSave}
                disabled={Object.values(errors).some(error => error)}>Сохранить</button>
            <button className={styles.td__btn}
                onClick={onCancelEdit}>Отмена</button>
        </tr>
    )
}
