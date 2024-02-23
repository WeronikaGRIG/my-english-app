
import React from 'react'
import './Footer.css';

import Vk from '../SocialIcons/VkIcon/VkIcon';
import Instagram from '../SocialIcons/InstaIcon/InstaIcon';
import Twitter from '../SocialIcons/Twitter/Twitter';
import LinkedIn from '../SocialIcons/LinkedIn/Linkedin';
import GitHub from '../SocialIcons/GitHub/GitHub';



export default function Footer() {
    return (
        <footer className="footer">
            <div classNameName="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item"><a href="#!"><Vk /></a></li>
                        <li className="social__item"><a href="#!"><Instagram /></a></li>
                        <li className="social__item"><a href="#!"><Twitter /></a></li>
                        <li className="social__item"><a href="#!"><LinkedIn /></a></li>
                        <li className="social__item"><a href="#!"><GitHub /></a></li>
                    </ul>
                    <div className="copyright">
                        <p>© 2024</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
