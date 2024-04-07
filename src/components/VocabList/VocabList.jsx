import { useEffect, useRef, useState } from 'react';

import styles from './VocabList.module.css';



export default function VocabList({ word, transcript, translation, onCheckTranslation }) {

    const [isHoverVocab, setHoverVocab] = useState(true);
    const translationButtonRef = useRef(null)

    const handleClick = () => {
        setHoverVocab(!isHoverVocab);
        onCheckTranslation();
    };

    useEffect(() => {
        if (translationButtonRef.current) {
            translationButtonRef.current.focus();
        }
    }, []);

    return <li className={styles.vocab__list}>
        <h3 className={styles.vocab__list_word}>{word}</h3>
        <p className={styles.vocab__list_transcript}>{transcript}</p>
        <p className={isHoverVocab ? styles.vocab__list_translation : styles.vocab__check}> {translation} </p>
        <button ref={translationButtonRef} className={styles.vocab__list_chek} onClick={handleClick}>Проверить</button>
    </li>;
}
