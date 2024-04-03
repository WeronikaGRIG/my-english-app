import { useState } from 'react';
import { list } from '../../list';

import VocabArrowRight from '../VocabArrowRight/VocabArrowRight'
import VocabArrowLeft from '../VocabArowLeft/VocabArrowLeft';
import VocabList from '../VocabList/VocabList';
import VocabPagination from '../VocabPagination/VocabPagination';

import styles from './Vocab.module.css'


export default function Vocab() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % list.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + list.length) % list.length);
    };

    const handlePageChange = (page) => {
        setCurrentIndex(page - 1);
    };

    return (
        <div className={styles.container}>
            <VocabArrowRight
                onClick={handlePrev} />

            <div className={styles.vocabs__wrapper}>
                <ul className={styles.vocab}>
                    <VocabList
                        key={currentIndex}
                        {...list[currentIndex]} />
                </ul>

                <VocabPagination
                    totalCount={list.length}
                    currentIndex={currentIndex}
                    onPageChange={handlePageChange} />
            </div>

            <VocabArrowLeft
                onClick={handleNext} />

        </div>
    )
}
