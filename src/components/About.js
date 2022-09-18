import './About.css'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaPhp, FaWordpress } from 'react-icons/fa'
import { TbCSharp } from 'react-icons/tb'
import { DiJqueryLogo } from 'react-icons/di'
import { SiMysql } from 'react-icons/si'

function About(){
    return(
        <div className='aboutContainer'>
            <h1 className="title">About me</h1>
            <p className='aboutDescription'>29 yo, I come from the south Italy. <br/> I'm a developement enthusiast. <br/> I dedicate myself to websites, videogames and every kind of relationship occurring between people and graphic interfaces.</p>
                
                <p className='skillsDescriptions'>The languages I can speak?</p>
                <div className='skillsIcons'>
                    <div className='skillIcon'>
                        <FaHtml5 size='3em' color='#223240' className='html icon' />
                        <p className='iconTxt'>HTML</p>
                    </div>
                    <div className='skillIcon'>
                        <FaCss3Alt size='3em' color='#223240' className='css icon' />
                        <p className='iconTxt'>CSS</p>
                    </div>
                    <div className='skillIcon'>
                        <FaJsSquare size='3em' color='#223240' className='js icon' />
                        <p className='iconTxt'>JS</p>
                    </div>
                    <div className='skillIcon'>
                        <FaPhp size='3em' color='#223240' className='php icon' />
                        <p className='iconTxt'>PHP</p>
                    </div>
                    <div className='skillIcon'>
                        <TbCSharp size='3em' color='#223240' className='csharp icon' />
                        <p className='iconTxt'>C#</p>
                    </div>
                    <div className='skillIcon'>
                        <DiJqueryLogo size='3em' color='#223240' className='jquery icon' />
                        <p className='iconTxtJq'>jQuery</p>
                    </div>
                    <div className='skillIcon'>
                        <SiMysql size='3em' color='#223240' className='mySql icon' />
                        <p className='iconTxt'>mySql</p>
                    </div>
                </div>  
        
                <p className='skillsDescriptions'>CMS I can manage:</p>  
                <div className='cms'>
                    <div className='skillIcon'>
                        <FaWordpress size='3em' color='#223240' className='wp icon' />
                        <p className='iconTxt'>Wordpress</p>
                    </div>
                </div>  
            
            <p className='aboutDescription'>And the list's 'bout to <strong>grow!</strong></p> 
        </div>     
    )
}

export default About;