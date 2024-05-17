import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';

import MoodIcon from '@mui/icons-material/Mood';

import styles from './VocabStats.module.css';

export default function VocabStats({ learnedWordsCount }) {



    return (
        <>
            < Stack />
            <Badge
                className={styles.badge}
                badgeContent={learnedWordsCount}
                showZero>
                <MoodIcon />
            </Badge>
            <Stack />
        </>
    );
}

