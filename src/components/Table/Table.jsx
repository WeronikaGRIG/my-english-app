import { useState } from 'react';
import { list } from '../../list';
import TableList from '../TableList/TableList';
import TableHeader from '../TableHeader/TableHeader';
import TableRowEditor from '../TableRowEditor/TableRowEditor';

import styles from './Table.module.css';

export default function Table() {
    //для отслеживания редактирования
    const [isEditing, setEditing] = useState(false);
    //изменения полей
    const [editedFields, setEditedFields] = useState({});
    //добавления нового слова
    const [newWord, setNewWord] = useState({ word: '', transcript: '', translation: '' });
    //список слов
    const [wordsList, setWordsList] = useState(list);
    //ошибки валидации
    const [errors, setErrors] = useState({});


    //редактировать строки таблицы
    const handleEdit = () => {
        setEditing(true);
    };

    //отменяет редактирование
    const handleCancelEdit = () => {
        setEditing(false);
        setEditedFields({});
        setNewWord({ word: '', transcript: '', translation: '' })
        setErrors({});
    };

    //обработчик изменения поля
    const handleFiedChange = (fieldName, value) => {
        setEditedFields(prevState => ({
            ...prevState,
            [fieldName]: value
        }));
        setErrors(prevErrors => ({
            ...prevErrors,
            [fieldName]: value.trim() === ''
        }));
    };

    //обраьлтчик сохранений изменений
    const handleSave = () => {
        if (Object.values(errors).some(error => error)) {
            console.log('Ошибка: Не все поля заполнены.');
            return;
        }
        // Проверка наличия изменений перед сохранением
        if (Object.keys(editedFields).length === 0) {
            console.log('нет изменений.');
            return;
        }

        try {
            // Обработка сохранения изменений, проверка
            console.log('Сохраненные данные:', editedFields);
            setEditing(false);
            setEditedFields({});
            setErrors({});
        } catch (error) {
            console.error('Ошибка при сохранении:', error);
        }

    };

    //оботчик добавления нового слова
    const handleAddWord = () => {
        if (Object.values(errors).some(error => error)) {
            console.log('Ошибка: Не все поля заполнены.');
            return;
        }

        try {
            setWordsList(prevList => [...prevList, newWord]);
            setNewWord({ word: '', transcript: '', translation: '' })
        } catch (error) {
            console.error('Ошибка при сохранении:', error);
        }
    };

    return (

        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <h3 className={styles.title}>Самоучитель</h3>

                    {!isEditing && (
                        <div className={styles.button}>
                            <button className={styles.td__btn} onClick={handleEdit}>Добавить слово</button>
                        </div>
                    )}

                    {isEditing ? (
                        <TableRowEditor
                            editedFields={editedFields}
                            onCancelEdit={handleCancelEdit}
                            onFieldChange={handleFiedChange}
                            onSave={handleSave}
                            newWord={newWord}
                            setNewWord={setNewWord}
                            handleAddWord={handleAddWord}
                        />
                    ) : null}

                    <table className={styles.table}>
                        <tbody className={styles.tbody}>
                            <TableHeader />

                            {wordsList.map((word, index) => {
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
