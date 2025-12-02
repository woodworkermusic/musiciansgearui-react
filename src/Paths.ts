import { GUEST_ROLE, Roles } from './models/roles.ts';

export const LINKS = {
  home: "/",
  about: "/",
  gearManufacturers: "/gearmanufacturers",
  gearTypes: "/geartypes",
  gearModels: "/gearmodels",
  myProfile: "/myprofile",
  register: "/register",
  signIn: "/signin",
  signOut: "/signout"
}

export const PATHS = {
    HOME: {
        link: LINKS.home,
        roles: [
            Roles.ADMIN,
            Roles.USER,
            Roles.RETAILER,
            GUEST_ROLE
        ]
    }, 

    ABOUT: {
      link: LINKS.about,
      roles: ['*']
    },

    GEARMANUFACTURERS: {
        link: LINKS.gearManufacturers,
        roles: [ Roles.ADMIN ]
    }, 

    GEARTYPES: {
      link: LINKS.gearTypes,
      roles: [ Roles.ADMIN ]
    }, 

    GEARMODELS: {
      link: LINKS.gearModels,
      roles: [ Roles.ADMIN ]
    }, 

    MYPROFILE: {
        link: LINKS.myProfile,
        roles: [ Roles.ADMIN, Roles.RETAILER, Roles.USER ]
    },

    REGISTER: {
      link: LINKS.register,
      roles: [ Roles.RETAILER, Roles.USER ]
    },

    SIGNIN: {
      link: LINKS.signIn,
      roles: [ Roles.ADMIN, Roles.RETAILER, Roles.USER ]
    },

    SIGNOUT: {
      link: LINKS.signOut,
      roles: [ Roles.ADMIN, Roles.RETAILER, Roles.USER ]
    }
};

export const ROLE_PATHS = Object.entries(PATHS).reduce(
  (acc, [pathName, { link, roles }]) => {
    roles.forEach((role) => {
      if (!acc[role]) acc[role] = [];
      acc[role].push(link);
    });
    return acc;
  },
  {} as Record<string, string[]>
);
