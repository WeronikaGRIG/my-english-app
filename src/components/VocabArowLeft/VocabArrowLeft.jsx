import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

import styles from './VocabArowLeft.module.css'

export default function VocabArrowLeft({ onClick }) {
    return <button className={styles.btn__arrow}
        onClick={onClick}>
        <ArrowCircleRightOutlinedIcon />
    </button >;
}
