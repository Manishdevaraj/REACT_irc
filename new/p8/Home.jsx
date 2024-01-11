import React from 'react';
const Home = () => {
    return (
        <div>
            <h2>Home</h2>
            <p>Welcome to the home page!</p>
        </div>
    )
}
export default Home;

//About.jsx

import React from 'react';
const About = () => {
    return (
        <div>
            <h2>About</h2>
            <p>This is the about page.</p>
        </div>
    )
}
export default About;

//Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <ul className='nav-links'>
                <li className='nav-link'><Link className="home" to={`/`}>Home</Link></li>
                <li className='nav-link'><Link className="about" to={`/about`}>About</Link></li>
            </ul>
        </div>
    )
}
export default Navbar;

//App.js

import React from 'react';
import './assets/css/App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}
export default App;

//index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
