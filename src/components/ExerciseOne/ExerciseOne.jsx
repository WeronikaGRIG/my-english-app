import { useState } from 'react';

import styles from './ExerciseOne.module.css';

function ExerciseOne() {
    const [text, setText] = useState('');
    const [formattedText, setFormattedText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleSubmit = () => {
        setFormattedText(text.toUpperCase());
        setText('');
    };

    return (
        <div>
            <h1>Домашнее задание 1/28 недели </h1>
            <input className={styles.input}
                type="text"
                value={text}
                onChange={handleChange} />

            <button
                className={styles.btn}
                onClick={handleSubmit}>Format Text</button>
            <p style={{ color: 'red' }}>{formattedText}</p>
        </div>
    );
}

export default ExerciseOne;