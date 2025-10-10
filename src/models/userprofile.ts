import { EntityBase } from './entitybase.ts';
import { Location } from './location.ts';
import { UserGear } from './usergear.ts';

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