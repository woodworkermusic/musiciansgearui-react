import mgcStyles from '../../css/MusiciansGearCommon.module.css';

import { useState } from 'react';
import AuthService from '../../services/authservice.ts';

function SignIn({ closeDialogClick }) {
    // const [loginId, setLoginId] = useState('');
    // const [loginPwd, setLoginPwd] = useState('');

    const [loginId, setLoginId] = useState('DonQuixote');
    const [loginPwd, setLoginPwd] = useState('@t3stPa$$w0rd');

    function signIn() 
    {
        AuthService.login(loginId, loginPwd)
            .then((success) => {
                if (success) {
                    closeDialogClick();
                }
                else 
                {
                    alert('oops - invalid login');
                }
            });
    }

    return (
        <div className={`${mgcStyles.marginTop} ${mgcStyles.signInDialog}`}>
            <div className={mgcStyles.header_Dialog}>
                <span className={mgcStyles.leftContent}>Sign In</span>
                <div>
                    <button onClick={closeDialogClick} className={`${mgcStyles.rightContent} ${mgcStyles.customBtn} ${mgcStyles.customBtnClose}`}>X</button>
                </div>
                <br className={mgcStyles.clearBreak} />
            </div>

            <br className={mgcStyles.clearBreak} />

            <div className={mgcStyles.marginTop}>
                <div className={mgcStyles.marginTop}>
                    <input className={`${mgcStyles.softInput} ${mgcStyles.marginTopBottom}`} 
                        id="txtLoginId" size="25" maxLength="100" onChange={e => setLoginId(e.target.value)} value={loginId}/>
                </div>
                <div className={mgcStyles.marginTop}>LOGIN ID</div>
                <div className={mgcStyles.marginTop}>
                     <input type="password" className={`${mgcStyles.softInput} ${mgcStyles.marginTopBottom}`} 
                        id="txtPassword" size="25" maxLength="100" onChange={e => setLoginPwd(e.target.value)} value={loginPwd}/>
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