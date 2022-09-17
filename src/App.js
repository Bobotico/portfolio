import './App.css';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';

function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break
    case "/about":
      component = <About />
      break
      case "/contacts":
      component = <Contacts />
      break
  }
  return(
    <>
      <Sidebar />
      <div>{component}</div>
    </>
  );
}

export default App;
