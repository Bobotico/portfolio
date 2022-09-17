import './Footer.css'

import { SocialIcon } from 'react-social-icons';

function Footer() {
    return(
        <div className='footer'>
            <div className="socialMediaIcons">

                <SocialIcon url="https://www.linkedin.com/in/francesco-borrelli/" />

            </div>
            <div className="mailContainer">   
                <p className="myMail">francesco.borrelli.pro@gmail.com</p>
            </div> 
        </div>
    )
}

export default Footer;