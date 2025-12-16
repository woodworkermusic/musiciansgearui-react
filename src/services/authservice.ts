import ApiService from './apiservice.ts';
import { ApiMethod } from '../enums/apimethod.ts';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { UserInfo } from '../models/userinfo.ts';
import { Roles } from '../enums/roles.ts';

interface ExtendedJwt extends JwtPayload {
    mgrUser: string;
}

const storageId = 'mgruser';

function getUserInfo(): UserInfo | null {
    let mgrUser = localStorage.getItem(storageId);

    if (mgrUser === null) 
        return null;

    let decodedToken = jwtDecode<ExtendedJwt>(mgrUser);

    let userInfo = new UserInfo();
    userInfo = JSON.parse(decodedToken.mgrUser);

    return userInfo;
}

const AuthService = {
    login: async<bool>(loginId: string, loginPwd: string): Promise<bool> => {
        var loginData = {
            loginType: 'username',
            userName: loginId,
            password: loginPwd,
            token: '',
            externalToken: '',
            email: 'guitars.and.outdoors@gmail.com'
        };

        return ApiService.send<bool>('Access/Login', ApiMethod.post, loginData)
            .then((response: any) => {
                if (response.success) {
                    let accessToken = response.accessToken;
                    localStorage.setItem(storageId, accessToken);
                }

                return response.success;
            });
    }, 

    logout: ()=> {
        localStorage.removeItem(storageId);
    },

    validUser: ()=> {
        let userInfo = getUserInfo();

        if (userInfo === null) 
            return false;

        return (userInfo.roles.length > 0) && (userInfo.roles.includes(Roles.USER));
    },

    hasRole: (roleName: string) => {
        let userInfo = getUserInfo();

        if (userInfo === null) 
            return false;

        return (userInfo.roles.includes(roleName));
    }
}

export default AuthService;