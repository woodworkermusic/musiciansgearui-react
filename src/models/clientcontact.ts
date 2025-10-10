import { EntityBase } from './entitybase.ts';

export class ClientContact extends EntityBase {
    clientContactId: number;
    clientId: number;
    lastName: string;
    firstName: string;
    emailAddress: string;
    phoneNumber: string;
}