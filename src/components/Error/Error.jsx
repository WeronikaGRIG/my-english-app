import styles from './Error.module.css'

import imgError from './404-web-page.png';

export default function Error() {
    return <div>
        <img
            className={styles.image}
            src={imgError}
            alt="#" />
    </div>;
}
