import { EntityBase } from './entitybase.ts';
import { ClientContact } from './clientcontact.ts';
import { Location } from './location.ts';

export class Client extends EntityBase 
{
    clientId: number;
    clientName: string;
    clientTypeId: number;
    clientStatus: string;
    clientContacts: ClientContact[] = [];
    clientLocations: Location[] = [];
}