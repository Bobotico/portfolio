import './App.css';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">

      <Sidebar />

      <div className="webIdentity">
          <img src="full_me.jpg" alt="circle layer" className="mainLayer"></img>
          {/*<img src="/circle_me.png" alt="circle layer" className="circleLayer"></img>
          <img src="/me.png" alt="body layer" className="bodyLayer"></img>*/}
          <div className="presentation">
            <h2>
              <span className="hey">Hey,</span><br/><span className="im"> I'm</span><span className="myName"> Francesco Borrelli</span>.<br/>
              <span className="webDesigner">Web Designer</span>
              <span className="separator"> | </span>
              <span className="frontEnd">FrontEnd dev</span>
            </h2>
              <button className="contactButton">CONTACT ME</button>
          </div>
      </div>
      <div className="socialMediaIcons">
        <h1 className="socialIcons">LinkedIn Facebook</h1>
      </div>
    </div>
  );
}

export default App;
