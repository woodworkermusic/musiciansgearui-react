import { useCallback, useEffect, useState } from 'react';
import AuthProvider from "./AuthProvider.js";

import {
  Link,
  Route,
  Routes,
  useNavigate
} from 'react-router-dom';

import { ErrorBoundary } from "react-error-boundary";

import Modal from 'react-modal';

import './App.css';
import mgcStyles from './css/MusiciansGearCommon.module.css';

import Home from './home.js';
import About from './components/About.js';
import Register from './components/user/Register.js';
import SignIn from './components/user/SignIn.js';
import GearTypes from './components/list/GearTypes.js';
import GearManufacturers from './components/list/GearManufacturers.js';
import GearModels from './components/treeview/GearModels.js';
import Loading from './components/Loading.js';
import ProtectedRoutes from './ProtectedRoutes.js';

// import { PATHS, ROLE_PATHS } from './Paths.ts';

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
  const [showRegister, setShowRegister] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [loadingText, setLoadingText] = useState('');

  const navigate = useNavigate();

  function logError(error) {
    console.error(error);
  }
  
  const errorHandler = ()=> {
    navigate('/');
    window.location.reload();
  }
  
  function errorFallback() {
    return (
      <>
          <table className={mgcStyles.stdDisplayTable}>
          <tbody>
            <tr>
              <td>The application has had a problem and must reset.</td>
              <td><button  className={`${mgcStyles.customBtn} ${mgcStyles.customBtnGreen}`} onClick={errorHandler}>Continue</button></td>
            </tr>
          </tbody>
          </table>
      </>
    )
  }
  
  function displaySignIn() {
    setShowMenu(false);
    setShowRegister(false);
    setShowSignIn(true);
    setShowModal(true);
  }

  function displayRegister() {
    setShowMenu(false);
    setShowSignIn(false);
    setShowRegister(true);
    setShowModal(true);
  }

  function closeModal() {
    setShowRegister(false);
    setShowSignIn(false);
    setShowModal(false);
  }

  function toggleMenu() 
  {
    showMenu ? setShowMenu(false) : setShowMenu(true);
  }

  function selectMenu(loadingValue) {
    toggleMenu();
    setLoadingText(loadingValue);
    setShowLoading(true);
    setShowModal(true);
  }

  const toggleLoading = useCallback(()=> {
    setShowModal(false);
    setShowLoading(false);
  }, []);

  useEffect(()=> {
    Modal.setAppElement('#mainBody');
  }, []);

  return (
    <ErrorBoundary FallbackComponent={errorFallback} onError={logError}>
        <AuthProvider>
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
                  <Link className={mgcStyles.popInMenuLink} onClick={displayRegister}>Register</Link>
                  <Link className={mgcStyles.popInMenuLink} onClick={toggleMenu}>My Gear</Link>
                  <Link className={mgcStyles.popInMenuLink} to="/myprofile" onClick={toggleMenu}>My Profile</Link>
                  <ProtectedRoutes cbToggleMenu={toggleMenu} cbSelectMenu={selectMenu} />
                  <Link className={mgcStyles.popInMenuLink} to="/about" onClick={toggleMenu}>About</Link>
                  <Link className={mgcStyles.popInMenuLink} onClick={displaySignIn}>Sign In</Link>
                  <Link className={mgcStyles.popInMenuLink} to="/signout" onClick={toggleMenu}>Sign Out</Link>
                </nav>
              </div> 
              : null
            }

            <Modal 
              isOpen={showModal}
              opRequestClose={()=> setShowModal(false)}
              style={modalStyle}
              contentLabel="Da Modal"
            >
              { showSignIn ? <SignIn closeDialogClick={closeModal} /> : null }
              { showRegister ? <Register closeDialogClick={closeModal} /> : null }
              { showLoading ? <Loading loadingText={loadingText} /> : null }
            </Modal>
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/about" element={<About />} />
            <Route path="/gearmanufacturers" element={<GearManufacturers cbToggleLoading={toggleLoading} />} />
            <Route path="/gearmodels" element={<GearModels />} />
            <Route path="/geartypes" element={<GearTypes cbToggleLoading={toggleLoading} />} />
          </Routes>
        </AuthProvider>
    </ErrorBoundary> 
  );
}

export default App;
