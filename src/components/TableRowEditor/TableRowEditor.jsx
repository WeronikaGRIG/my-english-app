

import styles from './TableRowEditor.module.css'

export default function TableRowEditor({ onCancelEdit,
    onFieldChange,
    onSave,
    newWord,
    setNewWord,
    handleAddWord,
    errors,
    setErrors }) {


    //изменение состояния поля ввода
    const handleChange = (e) => {
        const { name, value } = e.target;

        let error = false;

        onFieldChange(name, value);

        // проверка на латиницу для английского слова
        if (name === 'word' && !/^[a-zA-Z\s]*$/.test(value)) {
            error = true;
        }
        // проверка на наличие квадратных скобок для транскрипции
        if (name === 'transcript' && !/^\[.*\]$/.test(value)) {
            error = true;
        }
        // проверка на кириллицу перевода
        if (name === 'translation' && !/^[\u0400-\u04FF\s]*$/.test(value)) {
            error = true;
        }

        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: error
        }));

        //сосстояние newWord при изменении поля ввода 
        setNewWord(prevState => ({
            ...prevState,
            [name]: value
        }));

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

    const isBtnDisabled = Object.values(errors).some(error => error)


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
                disabled={!isBtnDisabled}>Сохранить</button>
            <button className={styles.td__btn}
                onClick={onCancelEdit}>Отмена</button>
        </tr>
    )
}