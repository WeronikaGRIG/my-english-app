import { useState } from 'react'
import styles from './Vocab.module.css'

export default function Vocab() {

    const [isHoverVocab, setHoverVocab] = useState(false);

    const handleClick = () => {
        setHoverVocab(!isHoverVocab);
    };

    return (
        <section >
            <div className={styles.container}>
                <div className={styles.vocabs__wrapper}>

                    <ul className={styles.vocab}>
                        <li className={styles.vocab__list}>
                            <h3 className={styles.vocab__list_word}>afraid</h3>
                            <p className={styles.vocab__list_transcript}>/əˈfreɪd/</p>
                            <p className={isHoverVocab ? styles.vocab__list_translation : styles.vocab__check}> напуганный </p>

                            <button className={styles.vocab__list_chek} onClick={handleClick}>Проверить</button>
                        </li>
                    </ul>
                </div>
            </div>

        </section>
    )
}
