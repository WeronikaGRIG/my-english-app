

import styles from './Footer.module.css';

import Vk from '../SocialIcons/VkIcon/VkIcon';
import Instagram from '../SocialIcons/InstaIcon/InstaIcon';
import Twitter from '../SocialIcons/Twitter/Twitter';
import LinkedIn from '../SocialIcons/LinkedIn/Linkedin';
import GitHub from '../SocialIcons/GitHub/GitHub';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footer__wrapper}>
                    <ul className={styles.social}>
                        <li className={styles.social__item}><a href="#!"><Vk /></a></li>
                        <li className={styles.social__item}><a href="#!"><Instagram /></a></li>
                        <li className={styles.social__item}><a href="#!"><Twitter /></a></li>
                        <li className={styles.social__item}><a href="#!"><LinkedIn /></a></li>
                        <li className={styles.social__item}><a href="#!"><GitHub /></a></li>
                    </ul>
                    <div className={styles.copyright}>
                        <p>© 2024</p>
                    </div>
                </div >
            </div >

        </footer >
    )
}
