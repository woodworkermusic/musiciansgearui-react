import { EntityBase } from './entitybase.ts';

export class Location extends EntityBase
{
    locationId: number;
    userId: number | null;
    clientId: number | null;
    manufacturerId: number | null;
    locationType: string;
    address1: string;
    address2: string | null;
    city: string;
    stateProvince: string;
    postalCode: string;
    country: string;
}