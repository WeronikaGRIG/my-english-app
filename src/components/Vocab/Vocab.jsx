import { useState, useRef, useEffect } from 'react';
import { list } from '../../list';

import VocabArrowRight from '../VocabArrowRight/VocabArrowRight'
import VocabArrowLeft from '../VocabArowLeft/VocabArrowLeft';
import VocabList from '../VocabList/VocabList';
import VocabPagination from '../VocabPagination/VocabPagination';
import VocabStats from '../VocabStats/VocabStats';

import styles from './Vocab.module.css'

export default function Vocab() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [learnedWordsCount, setLearnedWordsCount] = useState(0);
    const containerRef = useRef(null);

    // Прокрутка карточек при клике на кнопки влево/вправо
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % list.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + list.length) % list.length);
    };
    // Изменение нумерации в зависимости от клика влево/вправо
    const handlePageChange = (page) => {
        setCurrentIndex(page - 1);
    };

    //Cчетчик изучения слов
    const onCheckTranslation = () => {
        setLearnedWordsCount(prevCount => prevCount + 1)
    };

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.children[currentIndex].scrollIntoView({ behavior: 'smooth' });
        }
    }, [currentIndex]);


    return (
        <main className={styles.main}>
            <div className={styles.container}>

                <div className={styles.wrapper}>
                    <h3 className={styles.title}>Слова</h3>
                    <VocabStats learnedWordsCount={learnedWordsCount} />
                    <div className={styles.vocabs__wrapper}>

                        <VocabArrowRight
                            onClick={handlePrev} />

                        <ul className={styles.vocab}>
                            <VocabList
                                key={currentIndex}
                                {...list[currentIndex]}
                                onCheckTranslation={onCheckTranslation}
                            />
                        </ul>

                        <VocabArrowLeft
                            onClick={handleNext} />

                    </div>

                    <VocabPagination
                        totalCount={list.length}
                        currentIndex={currentIndex}
                        onPageChange={handlePageChange} />

                </div>
            </div>
        </main>
    )
}
