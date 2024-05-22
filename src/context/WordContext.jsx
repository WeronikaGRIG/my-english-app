
import { createContex, useEffect, useState } from 'react';
import axios from 'axios';

export const WordContext = createContex();

export const WordsContext = ({ children }) => {
    const [words, setWords] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getWords();
    }, []);

    const getWords = async () => {
        try {
            const response = await axios.get('http://itgirlschool.justmakeit.ru/api/words');
            setWords(response.data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const postWord = async (word) => {
        try {
            const response = await axios.post('http://itgirlschool.justmakeit.ru/api/words', word);
            setWords([...words, response.data]);
        } catch (error) {
            setError(error.message);
        }
    };

    const putWord = async (putWord) => {
        try {
            const response = await axios.put(`http://itgirlschool.justmakeit.ru/api/words/${putWord.id}`, putWord);
            setWords(words.map(word => word.id === putWord.id ? response.data : word));
        } catch (error) {
            setError(error.message);
        }
    };

    const deleteWord = async (wordId) => {
        try {
            await axios.delete(`http://itgirlschool.justmakeit.ru/api/words/${wordId}`);
            setWords(words.filter(word => word.id !== wordId));
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <WordsContext.Provider value={{ words, loading, error, postWord, putWord, deleteWord }}>
            {children}
        </WordsContext.Provider>
    );
};

