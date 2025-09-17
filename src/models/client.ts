import { EntityBase } from './entitybase';
import { ClientContact } from './clientcontact';
import { Location } from './location';

export class Client extends EntityBase 
{
    clientId: number;
    clientName: string;
    clientTypeId: number;
    clientStatus: string;
    clientContacts: ClientContact[] = [];
    clientLocations: Location[] = [];
}