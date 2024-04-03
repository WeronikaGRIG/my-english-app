import { Pagination } from "@mui/material";
import styles from './VocabPagination.module.css'

export default function VocabPagination({ totalCount, currentIndex, onPageChange }) {
    return <div className={styles.pagination}>
        <Pagination count={totalCount}
            page={currentIndex + 1}
            onChange={(event, page) => onPageChange(page)}
            hidePrevButton
            hideNextButton />
    </div>;
}
