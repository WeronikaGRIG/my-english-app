

import styles from './Footer.module.css';

import VkIcon from '../SocialIcons/VkIcon/VkIcon';
import InstaIcon from '../SocialIcons/InstaIcon/InstaIcon';
import TwitterIcon from '../SocialIcons/TwitterIcon/Twitter';
import LinkedinIcon from '../SocialIcons/LinkedInIcon/Linkedin';
import GitHubicon from '../SocialIcons/GitHubIcon/GitHub';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footer__wrapper}>
                    <ul className={styles.social}>
                        <li className={styles.social__item}><a href="#!"><VkIcon /></a></li>
                        <li className={styles.social__item}><a href="#!"><InstaIcon /></a></li>
                        <li className={styles.social__item}><a href="#!"><TwitterIcon /></a></li>
                        <li className={styles.social__item}><a href="#!"><LinkedinIcon /></a></li>
                        <li className={styles.social__item}><a href="#!"><GitHubicon /></a></li>
                    </ul>
                    <div className={styles.copyright}>
                        <p>© 2024</p>
                    </div>
                </div >
            </div >

        </footer >
    )
}
