import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import styles from './VocabArrowRight.module.css'

export default function VocabArrowRight({ onClick }) {
    return <button className={styles.btn__arrow}
        onClick={onClick}>
        <ArrowCircleLeftOutlinedIcon />
    </button>;
}
