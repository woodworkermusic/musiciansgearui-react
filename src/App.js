import React from 'react';
import { useEffect, useState } from 'react';

import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from 'react-router-dom';

import Modal from 'react-modal';

import './App.css';
import mgcStyles from './css/MusiciansGearCommon.module.css';

import Home from './home.js';
import About from './components/About.js';
import SignIn from './components/user/SignIn.js';
import GearModel from './components/edit/GearModel.js';
import GearTypes from './components/list/GearTypes.js';
import GearManufacturers from './components/list/GearManufacturers.js';

const modalStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 100000
  },
};

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  function displaySignIn() {
    setShowMenu(false);
    setShowSignIn(true);
  }

  function closeSignIn()
  {
    setShowSignIn(false);
  }

  function toggleMenu() 
  {
    showMenu ? setShowMenu(false) : setShowMenu(true);
  }

  useEffect(()=> {
    Modal.setAppElement('#mainBody');
  }, []);

  return (
    <BrowserRouter>
      <div className={mgcStyles.mainBody} id="mainBody">
          <div className={mgcStyles.headerBar}>
              <span className={mgcStyles.leftContent} id="mainBody_HeaderLeft">
                  <span className={mgcStyles.headerBarText} id="mainBody_HeaderTitle" onClick={toggleMenu}>&#x2630;</span>
              </span>
              <span className={mgcStyles.rightContent} id="mainBody_HeaderRight">
                  The Gear Registry
              </span>
              <br className={mgcStyles.clearBreak} />
          </div>

          { showMenu ?
            <div className={mgcStyles.popInMenu}>
              <nav>
                <Link className={mgcStyles.popInMenuLink} to="/" onClick={toggleMenu}>Home</Link>
                <Link className={mgcStyles.popInMenuLink} onClick={displaySignIn}>Sign In</Link>
                <Link className={mgcStyles.popInMenuLink} to="/register" onClick={toggleMenu}>Register</Link>
                <Link className={mgcStyles.popInMenuLink} to="/myprofile" onClick={toggleMenu}>My Profile</Link>
                <Link className={mgcStyles.popInMenuLink} to="/signout" onClick={toggleMenu}>Sign Out</Link>
                <Link className={mgcStyles.popInMenuLink} to="/about" onClick={toggleMenu}>About</Link>
                <Link className={mgcStyles.popInMenuLink} to="/gearmanufacturers" onClick={toggleMenu}>Gear Manufacturers</Link>
                <Link className={mgcStyles.popInMenuLink} to="/gearmodels" onClick={toggleMenu}>Gear Models</Link>
                <Link className={mgcStyles.popInMenuLink} to="/geartypes" onClick={toggleMenu}>Gear Types</Link>
              </nav>
            </div> 
            : null
          }

          <Modal
            isOpen={showSignIn}
            onRequestClose={()=> setShowSignIn(false)}
            style={modalStyle}
            contentLabel="Da Modal"
          >
            <SignIn closeSignInClick={closeSignIn} />
          </Modal>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/about" element={<About />} />
        <Route path="/gearmanufacturers" element={<GearManufacturers />} />
        <Route path="/gearmodels" element={<GearModel />} />
        <Route path="/geartypes" element={<GearTypes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
