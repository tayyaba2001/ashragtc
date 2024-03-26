import logo from './logo.svg';
import './App.css';
import Home from './components/pages/Home';
import Dispatch from './components/pages/Dispatch';
import About from './components/pages/About';
import Cargo from './components/pages/Cargo';
import NavbarNew from './components/pages/NavbarNew';
import ReactDOM from 'react-dom/client';
import Contact from './components/pages/Contact';
import FooterN from './components/pages/FooterN';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import GeneralService from './components/pages/GeneralService';
function App() {
  return (
    <>
 
      <Router>
     
      <NavbarNew/>
        <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/generalservice' element={<GeneralService/>} />
      <Route path='/cargoservice' element={<Cargo/>} />
      <Route path='/dispatch-trading-service' element={<Dispatch/>} />

      <Route path='/contact' element={<Contact/>} />
      </Routes>
    <FooterN/>
      </Router>


    </>
  );
}

export default App;


/*   <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */