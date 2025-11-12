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

        ApiService.sendPost('UserProfile/Register', newUser)
            .then((response) => {
                if (response === true) {
                    closeDialogClick();
                }
                else {
                    alert('oops - something is wrong');
                }
            })
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

            <table className={mgcStyles.marginTop}>
                <tbody>
                    <tr>
                        <td>User Name:</td>
                        <td><input className={`${mgcStyles.softInput} ${mgcStyles.marginTopBottom}`} 
                            size="25" maxLength="40" onChange={e => setUserName(e.target.value)} value={userName}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Password:</td>
                        <td>
                            <input type="password" className={`${mgcStyles.softInput} ${mgcStyles.marginTopBottom}`} 
                                size="15" maxLength="30" onChange={e => setLoginPwd(e.target.value)} value={loginPwd}/>
                        </td>
                    </tr>
                    <tr>
                        <td>First Name:</td>
                        <td>
                            <input className={`${mgcStyles.softInput} ${mgcStyles.marginTopBottom}`} 
                                size="25" maxLength="50" onChange={e => setFirstName(e.target.value)} value={firstName}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Last Name:</td>
                        <td>
                            <input className={`${mgcStyles.softInput} ${mgcStyles.marginTopBottom}`} 
                                size="25" maxLength="50" onChange={e => setLastName(e.target.value)} value={lastName}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Date of Birth:</td>
                        <td>
                            <input type="date" className={`${mgcStyles.softInput} ${mgcStyles.marginTopBottom}`} 
                                onChange={e => setDateOfBirth(e.target.value)} value={dateOfBirth}/>
                        </td>
                    </tr>
                    <tr>
                        <td>e-mail Address:</td>
                        <td>
                            <input className={`${mgcStyles.softInput} ${mgcStyles.marginTopBottom}`} 
                                size="40" maxLength="255" onChange={e => setEmail(e.target.value)} value={email}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Phone Number:</td>
                        <td>
                            <input className={`${mgcStyles.softInput} ${mgcStyles.marginTopBottom}`} 
                                size="25" maxLength="40" onChange={e => setPhoneNumber(e.target.value)} value={phoneNumber}/>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2" align="center">
                            <button className={`${mgcStyles.customBtn} ${mgcStyles.customBtnGreen} ${mgcStyles.leftContent}`} onClick={registerUser}>Register</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>            
    );
}

export default Register;