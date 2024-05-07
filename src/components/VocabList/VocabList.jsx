import { useEffect, useRef, useState } from 'react';

import styles from './VocabList.module.css';


export default function VocabList({ word, transcript, translation, onCheckTranslation }) {

    const [hoverVocab, setHoverVocab] = useState(true);
    const [translationShown, setTranslationShown] = useState(false)
    const translationButtonRef = useRef(null)

    const handleClick = () => {
        setHoverVocab(!hoverVocab);
        if (!translationShown) {
            setTranslationShown(true);
            onCheckTranslation();
        }

    };

    useEffect(() => {
        if (translationButtonRef.current) {
            translationButtonRef.current.focus();
        }
    }, []);

    return <li className={styles.vocab__list}>
        <h3 className={styles.vocab__list_word}>{word}</h3>
        <p className={styles.vocab__list_transcript}>{transcript}</p>
        <p className={hoverVocab ? styles.vocab__list_translation : styles.vocab__check}> {translation} </p>
        <button
            ref={translationButtonRef}
            className={styles.vocab__list_chek}
            onClick={handleClick}>
            Проверить
        </button>
    </li>;
}
