import './Footer.css'

import { SocialIcon } from 'react-social-icons';

function Footer() {
    return(
        <div className='footer'>

            <div className='socialIcons'>
                <SocialIcon url="https://www.linkedin.com/in/francesco-borrelli/" target="_blank" rel="noopener noreferrer" />
            </div>

                <p className="myMail">francesco.borrelli.pro@gmail.com</p>

        </div>
    )
}

export default Footer;