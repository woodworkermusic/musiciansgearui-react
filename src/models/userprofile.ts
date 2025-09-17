import { EntityBase } from './entitybase';
import { Location } from './location';
import { UserGear } from './usergear';

export class UserProfile extends EntityBase 
{
    userId: number;
    firstName: string;
    middleInitial: string;
    lastName: string;
    dateOfBirth: Date | null;
    dateRegistered: Date;
    userName: string;
    password: string;
    emailAddress: string;
    phoneNumber: string;
    userProfileStatus: string;

    userGear: UserGear[] = [];
    locations: Location[] = [];
}