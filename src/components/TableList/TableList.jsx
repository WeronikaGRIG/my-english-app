import { useState } from 'react';

import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddCircleIcon from '@mui/icons-material/AddCircle';

// import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import styles from './TableList.module.css';


export default function TableList({ word, transcript, translation }) {


    const [showBtnAdding, setShowBtnAdding] = useState(false);
    // const [addEditer, setAddEditer] = useState(true);

    // Слушатель для кнопки редактирования(открываются инпуты, кнопка добавить слова)
    const clickEditerHandler = () => {
        setShowBtnAdding(!showBtnAdding);
        console.log('clickEditer');
    };



    return (
        <tr className={styles.tr}>
            <td className={styles.td}><p>{word}</p></td>
            <td className={styles.td}><p>{transcript}</p></td>
            <td className={styles.td}><p>{translation}</p></td>

            <div className={styles.button}>
                <button
                    className={showBtnAdding ? styles.td__btn : styles.btn__show}>
                    <AddCircleIcon />
                </button>
                <button
                    className={!showBtnAdding ? styles.td__btn : styles.btn__show}
                    onClick={clickEditerHandler}>
                    <EditIcon />
                </button>

                <button
                    className={styles.td__btn}>
                    <DeleteForeverIcon />
                </button>

            </div>

        </tr>

    )
}
