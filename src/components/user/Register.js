import { useState } from 'react';
import mgcStyles from '../../css/MusiciansGearCommon.module.css';
import dto_RegisterUser from '../../models/dto_registeruser.ts';
import ApiService from '../../services/apiservice.ts';

function Register({ closeDialogClick }) {
    const [userName, setUserName] = useState();
    const [loginPwd, setLoginPwd] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [dateOfBirth, setDateOfBirth] = useState();
    const [email, setEmail] = useState();
    const [phoneNumber, setPhoneNumber] = useState();

    function registerUser() 
    {
        let newUser = new dto_RegisterUser();

        newUser.active = true;
        newUser.firstName = firstName;
        newUser.lastName = lastName;
        newUser.dateOfBirth = dateOfBirth;
        newUser.userName = userName;
        newUser.emailAddress = email;
        newUser.phoneNumber = phoneNumber;
        newUser.newUserPassword = loginPwd;

        ApiService.sendPost('UserProfile/Register', newUser);
        closeDialogClick();
    }

    return (
        <div className={`${mgcStyles.marginTop}`}>
            <div className={mgcStyles.header_Dialog}>
                <span className={mgcStyles.leftContent}>Register</span>
                <div>
                    <button onClick={closeDialogClick} className={`${mgcStyles.rightContent} ${mgcStyles.customBtn} ${mgcStyles.customBtnClose}`}>X</button>
                </div>
                <br className={mgcStyles.clearBreak} />
            </div>

            <br className={mgcStyles.clearBreak} />

            <div className={mgcStyles.marginTop}>
                <div className={mgcStyles.marginTop}>
                    <span className={mgcStyles.marginTop}>User Name:</span>
                    <input className={`${mgcStyles.softInput} ${mgcStyles.marginTopBottom}`} 
                        size="25" maxLength="40" onChange={e => setUserName(e.target.value)} value={userName}/>
                </div>

                <div className={mgcStyles.marginTop}>
                    <span className={mgcStyles.marginTop}>Password:</span>
                    <input type="password" className={`${mgcStyles.softInput} ${mgcStyles.marginTopBottom}`} 
                        size="15" maxLength="30" onChange={e => setLoginPwd(e.target.value)} value={loginPwd}/>
                </div>

                <div className={mgcStyles.marginTop}>
                    <span className={mgcStyles.marginTop}>First Name:</span>
                    <input className={`${mgcStyles.softInput} ${mgcStyles.marginTopBottom}`} 
                        size="25" maxLength="50" onChange={e => setFirstName(e.target.value)} value={firstName}/>
                </div>

                <div className={mgcStyles.marginTop}>
                    <span className={mgcStyles.marginTop}>Last Name:</span>
                    <input className={`${mgcStyles.softInput} ${mgcStyles.marginTopBottom}`} 
                        size="25" maxLength="50" onChange={e => setLastName(e.target.value)} value={lastName}/>
                </div>

                <div className={mgcStyles.marginTop}>
                    <span className={mgcStyles.marginTop}>Date of Birth:</span>
                    <input type="date" className={`${mgcStyles.softInput} ${mgcStyles.marginTopBottom}`} 
                        onChange={e => setDateOfBirth(e.target.value)} value={dateOfBirth}/>
                </div>

                <div className={mgcStyles.marginTop}>
                    <span className={mgcStyles.marginTop}>e-mail Address:</span>
                    <input className={`${mgcStyles.softInput} ${mgcStyles.marginTopBottom}`} 
                        size="40" maxLength="255" onChange={e => setEmail(e.target.value)} value={email}/>
                </div>

                <div className={mgcStyles.marginTop}>
                    <span className={mgcStyles.marginTop}>Phone Number:</span>
                    <input className={`${mgcStyles.softInput} ${mgcStyles.marginTopBottom}`} 
                        size="25" maxLength="40" onChange={e => setPhoneNumber(e.target.value)} value={phoneNumber}/>
                </div>

                <div className={mgcStyles.marginTopBottom}>
                    <button className={`${mgcStyles.customBtn} ${mgcStyles.customBtnGreen} ${mgcStyles.leftContent}`} onClick={registerUser}>Register</button>
                </div>
            </div>
        </div>            
    );
}

export default Register;