import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import MoodBadIcon from '@mui/icons-material/MoodBad';
import MoodIcon from '@mui/icons-material/Mood';

import styles from './VocabStats.module.css';

export default function VocabStats({ learnedWordsCount }) {
    return (

        <Stack className={styles.stack}>

            <Badge
                className={styles.badge}
                color="secondary"
                badgeContent={0}>
                <MoodBadIcon />
            </Badge>

            <Badge
                className={styles.badge}
                color="secondary"
                badgeContent={learnedWordsCount}
                showZero>
                <MoodIcon />
            </Badge>

        </Stack>

    );
}

