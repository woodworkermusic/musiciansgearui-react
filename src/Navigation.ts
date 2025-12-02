import { Roles } from './models/roles.ts';
import { PATHS, ROLE_PATHS } from './Paths.ts';
import './App.css';
import mgcStyles from './css/MusiciansGearCommon.module.css';

type UserAvailableMenus = {
    [role: string]: string[];
};

export const menuNavigation = [
    {
        key: PATHS.HOME.link,
        label: "Home"
    },
    {
        key: PATHS.ABOUT.link,
        label: "About"
    },
    {
        key: PATHS.GEARMANUFACTURERS.link,
        label: "Gear Manufacturers"
    },
    {
        key: PATHS.GEARTYPES.link,
        label: "Gear Types"
    },
    {
        key: PATHS.GEARMODELS.link,
        label: "Gear Models"
    },
    {
        key: PATHS.MYPROFILE.link,
        label: "My Profile"
    },
    {
        key: PATHS.REGISTER.link,
        label: "Register"
    },
    {
        key: PATHS.SIGNIN.link,
        label: "Sign In"
    },
    {
        key: PATHS.SIGNOUT.link,
        label: "Sign Out"
    }
];

export const availableMenus: UserAvailableMenus = {};

for (const role in ROLE_PATHS) {
  const userRole = role as Roles;
  const paths = ROLE_PATHS[userRole];

  const menus = menuNavigation.filter((m) => paths.includes(m.key));

//   availableMenus[role] = menus;
}