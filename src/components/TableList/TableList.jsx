import { useState } from 'react';

import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddCircleIcon from '@mui/icons-material/AddCircle';

// import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import styles from './TableList.module.css';


export default function TableList({ word, transcript, translation }) {


    const [editing, setEditing] = useState(false)

    // Слушатель для кнопки редактирования(открываются инпуты, кнопка добавить слова)
    const clickEditerHandler = () => {
        setEditing(!editing);
        console.log('Click Editer');
    };

    const clickBtnAddingHandler = () => {
        setEditing(!editing);
        console.log('Click Add');
    };



    return (
        <tr className={styles.tr}>
            <td className={styles.td}><p>{word}</p></td>
            <td className={styles.td}><p>{transcript}</p></td>
            <td className={styles.td}><p>{translation}</p></td>

            <div className={styles.button}>


                {editing ? (
                    <button
                        className={editing ? styles.td__btn : styles.btn__show}
                        onClick={clickBtnAddingHandler}>
                        <AddCircleIcon />
                    </button>
                ) : (
                    <button
                        className={editing ? styles.btn__show : styles.td__btn}
                        onClick={clickEditerHandler}>
                        <EditIcon />
                    </button>)}

                <button
                    className={styles.td__btn}>
                    <DeleteForeverIcon />
                </button>

            </div>

        </tr >

    )
}
