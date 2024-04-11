import { useState } from 'react';
import TableList from '../TableList/TableList';
import { list } from '../../list';
import styles from './Table.module.css';
import TableHeader from '../TableHeader/TableHeader';
import TableRowEditor from '../TableRowEditor/TableRowEditor';


export default function Table() {

    const [isEditing, setEditing] = useState(false);
    const [editedFields, setEditedFields] = useState({});
    const [list, setList] = useState([]);
    const [newWord, setNewWord] = useState({ word: '', transcription: '', translation: '' });
    const [errors, setErrors] = useState({});

    const handleEdit = () => {
        setEditing(true);
    };

    const handleCancelEdit = () => {
        setEditing(false);
        setEditedFields({});
        setErrors({});
    };

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

    const handleSave = () => {
        if (Object.values(errors).some(error => error)) {
            console.log('Ошибка: Не все поля заполнены.');
            return;
        }
        // Обработка сохранения изменений
        console.log('Сохраненные данные:', editedFields);
        setEditing(false);
        setEditedFields({});
        setErrors({});
    };

    const handleAddWord = () => {
        if (Object.values(errors).some(error => error)) {
            console.log('Ошибка: Не все поля заполнены.');
            return;
        }
        setList(prevList => [...prevList, newWord]);
        setNewWord({ word: '', transcription: '', translation: '' })
    }

    return (

        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <h3 className={styles.title}>Самоучитель</h3>
                    <table className={styles.table}>
                        <tbody className={styles.tbody}>
                            <TableHeader />

                            {isEditing ? (
                                <TableRowEditor
                                    editedFields={editedFields}
                                    onCancelEdit={handleCancelEdit}
                                    onFieldChange={handleFiedChange}
                                    onSave={handleSave}
                                    newWord={newWord}
                                    setNewWord={setNewWord} />
                            ) : null}

                            {list.map((word, index) => {
                                return (
                                    <TableList key={index} {...word} />
                                )
                            })}
                        </tbody>
                    </table>
                    {!isEditing && (
                        <div className={styles.button}>
                            <button className={styles.td__btn} onClick={handleEdit}>Добавить слово</button>
                        </div>
                    )}
                    {isEditing && (
                        <div className={styles.button}>
                            <button className={styles.td__btn} onClick={handleAddWord}>Добавить слово</button>
                        </div>
                    )}

                </div>
            </div>
        </main>
    )
}
