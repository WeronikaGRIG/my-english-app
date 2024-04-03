import { useState } from 'react';

import styles from './VocabList.module.css';



export default function VocabList({ word, transcript, translation }) {

    const [isHoverVocab, setHoverVocab] = useState(true);

    const handleClick = () => {
        setHoverVocab(!isHoverVocab);
    };

    return <li className={styles.vocab__list}>
        <h3 className={styles.vocab__list_word}>{word}</h3>
        <p className={styles.vocab__list_transcript}>{transcript}</p>
        <p className={isHoverVocab ? styles.vocab__list_translation : styles.vocab__check}> {translation} </p>
        <button className={styles.vocab__list_chek} onClick={handleClick}>Проверить</button>
    </li>;
}
