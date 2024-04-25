import { useEffect, useState } from 'react';
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
    // Состояние для отслеживания  добавления слова
    const [isAdding, setIsAdding] = useState(false);
    //ошибки валидации
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const storedWords = localStorage.getItem('wordsList');
        if (storedWords) {
            setWordsList(JSON.parse(storedWords));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('wordsList', JSON.stringify(wordsList));
    }, [wordsList]);


    //обработчик изменения поля
    const handleFiedChange = (fieldName, value) => {
        setNewWord((prevState) => ({
            ...prevState,
            [fieldName]: value
        }));

        const error = validateField(fieldName, value);
        setErrors((prevErrors) => ({
            ...prevErrors,
            [fieldName]: error
        }));
    };

    //обраьлтчик сохранений изменений
    const handleSave = () => {

        if (!Object.values(errors).some(error => error)) {
            setWordsList((prevList) => [...prevList, newWord]);
            setNewWord({ word: '', transcript: '', translation: '' });
            setIsAdding(false);
            setErrors({});
        } else {
            console.log('Ошибка: Заполни все поля!')
        }
    };

    //оботчик добавления нового слова
    const handleAddWord = () => {
        setIsAdding(true);
    };

    //отменяет редактирование
    const handleCancelEdit = () => {
        setIsAdding(false);
        // Сброс значений для нового слова
        setNewWord({ word: '', transcript: '', translation: '' });
        //сброс ошибок валидации
        setErrors({});
    };

    // Валидация поля
    const validateField = (fieldName, value) => {
        let error = false;
        // Проверка на латиницу для английского слова
        if (fieldName === 'word' && !/^[a-zA-Z\s]*$/.test(value)) {
            error = true;
        }
        // Проверка на наличие квадратных скобок для транскрипции
        if (fieldName === 'transcript' && !/^\[.*\]$/.test(value)) {
            error = true;
        }
        // Проверка на кириллицу перевода
        if (fieldName === 'translation' && !/^[\u0400-\u04FF\s]*$/.test(value)) {
            error = true;
        }
        return error;
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
                        editedFields={newWord}
                        onCancelEdit={handleCancelEdit}
                        errors={errors}

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