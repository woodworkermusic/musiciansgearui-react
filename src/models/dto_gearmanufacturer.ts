import { EntityBase } from './entitybase.ts';

export class dto_GearManufacturer extends EntityBase
{
    manufacturerId: number | null;
    manufacturerName: string;
    isActive: boolean;
    primaryLocationId: number | null;
}