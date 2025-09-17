import { EntityBase } from './entitybase';

export class ClientContact extends EntityBase {
    clientContactId: number;
    clientId: number;
    lastName: string;
    firstName: string;
    emailAddress: string;
    phoneNumber: string;
    active: boolean;
}