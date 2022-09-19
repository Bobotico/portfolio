import './Home.css';
import {useNavigate} from 'react-router-dom';


function Home() {

  const navigate = useNavigate();

  const navigateToContacts = () => {
    // 👇️ navigate to /contacts
    navigate('/contacts');
  };

  return (
    <div>
      <div className="webIdentity">
          <img src="/portfolio/full_me.jpg" alt="circle layer" className="mainLayer"></img>
          {/*<img src="/circle_me.png" alt="circle layer" className="circleLayer"></img>
          <img src="/me.png" alt="body layer" className="bodyLayer"></img>*/}
          <div className="presentation">
            <h2>
              <span className="hey">Hey,</span><br/><span className="im"> I'm</span><span className="myFullName"> Francesco Borrelli</span>.<br/>
              <span className="webDesigner">Web Designer</span>
              <span className="separator"> | </span>
              <span className="frontEnd">FrontEnd dev</span>
            </h2>
              <button className="contactButton" onClick={navigateToContacts}>CONTACT ME</button>
          </div>
      </div>
    </div>
  );
}

export default Home;