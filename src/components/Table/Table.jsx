import { useState } from 'react';
import { list } from '../../list';
import TableList from '../TableList/TableList';
import TableHeader from '../TableHeader/TableHeader';
import TableRowEditor from '../TableRowEditor/TableRowEditor';

import styles from './Table.module.css';

export default function Table() {
    //список слов
    const [wordsList, setWordsList] = useState(list);
    //добавления нового слова
    const [newWord, setNewWord] = useState({ word: '', transcript: '', translation: '' });
    const [editedFields, setEditedFields] = useState({});
    const [isAdding, setIsAdding] = useState(false);
    //ошибки валидации
    const [errors, setErrors] = useState({});

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
        setWordsList(prevList => [...prevList, newWord]);
        setNewWord({ word: '', transcript: '', translation: '' });
        setIsAdding(false);

    };

    //оботчик добавления нового слова
    const handleAddWord = () => {
        setIsAdding(true);
    };

    //отменяет редактирование
    const handleCancelEdit = () => {
        setIsAdding(false);
        setNewWord({ word: '', transcript: '', translation: '' });
        setErrors({});
    };

    return (

        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <h3 className={styles.title}>Самоучитель</h3>


                    <div className={styles.button}>
                        <button
                            className={styles.td__btn}
                            onClick={handleAddWord}>
                            Добавить слово
                        </button>
                    </div>


                    {isAdding && <TableRowEditor
                        onFieldChange={handleFiedChange}
                        onSave={handleSave}
                        editedFields={editedFields}
                        onCancelEdit={handleCancelEdit}
                        newWord={newWord}
                        setNewWord={setNewWord}
                        handleAddWord={handleAddWord}
                        errors={errors}
                        setErrors={setErrors}
                    />}


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