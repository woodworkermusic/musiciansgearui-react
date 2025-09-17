import mgcStyles from '../../css/MusiciansGearCommon.module.css';

import { useState } from 'react';
import ApiService from '../../services/apiservice.ts';

function SignIn({ closeSignInClick }) {
    // const [loginId, setLoginId] = useState('');
    // const [loginPwd, setLoginPwd] = useState('');

    const [loginId, setLoginId] = useState('DonQuixote');
    const [loginPwd, setLoginPwd] = useState('@v3ryl0ngPa$$w0rd');

    const changeLoginId = (inputText) => {
        setLoginId(inputText);
    }

    const changeLoginPwd = (inputText) => {
        setLoginPwd(inputText);
    }

    function signIn() 
    {
        var loginData = {
            loginType: 'user',
            userName: loginId,
            password: loginPwd,
            token: '',
            externalToken: '',
            email: 'guitars.and.outdoors@gmail.com'
        };

        var loginResult = ApiService.sendPost('https://localhost:44326/api/Access/SignIn', loginData);
        closeSignInClick();
    }

    return (
        <div className={`${mgcStyles.marginTop} ${mgcStyles.signInDialog}`}>
            <div className={mgcStyles.header_Dialog}>
                <span className={mgcStyles.leftContent}>Sign In</span>
                <div>
                    <button onClick={closeSignInClick} className={`${mgcStyles.rightContent} ${mgcStyles.customBtn} ${mgcStyles.customBtnClose}`}>X</button>
                </div>
                <br className={mgcStyles.clearBreak} />
            </div>

            <br className={mgcStyles.clearBreak} />

            <div className={mgcStyles.marginTop}>
                <div className={mgcStyles.marginTop}>
                    <input type="text" className={`${mgcStyles.softInput} ${mgcStyles.marginTopBottom}`} 
                        id="txtLoginId" size="25" maxLength="100" onChange={changeLoginId} value={loginId}/>
                </div>
                <div className={mgcStyles.marginTop}>LOGIN ID</div>
                <div className={mgcStyles.marginTop}>
                     <input type="password" className={`${mgcStyles.softInput} ${mgcStyles.marginTopBottom}`} 
                        id="txtPassword" size="25" maxLength="100" onChange={changeLoginPwd} value={loginPwd}/>
                </div>
                <div className={mgcStyles.marginTop}>PASSWORD</div>

                <br />

                <div className={mgcStyles.marginTopBottom}>
                    <button id="btnSignIn" className={`${mgcStyles.customBtn} ${mgcStyles.customBtnGreen} ${mgcStyles.leftContent}`} onClick={signIn}>Login</button>
                    <span className={`${mgcStyles.smallText} ${mgcStyles.rightContent}`}>
                        <span>Remember Me</span>
                        <input type="checkbox" id="chkRememberMe" />
                    </span>
               </div>

                <div className={mgcStyles.marginDblTop} id="signInStatus"></div>
            </div>
        </div>            
    );
}

export default SignIn;