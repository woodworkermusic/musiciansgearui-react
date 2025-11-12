import { EntityBase } from './entitybase.ts';

export default class dto_RegisterUser extends EntityBase
{
    firstName: string = '';
    middleInitial: string | null = null;
    lastName: string = '';
    dateOfBirth: Date | null = null;
    userName: string = '';
    emailAddress: string = '';
    phoneNumber: string = '';
    newUserPassword: string = '';
}
