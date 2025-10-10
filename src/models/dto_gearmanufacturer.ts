import { EntityBase } from './entitybase.ts';

export default class dto_GearManufacturer extends EntityBase
{
    manufacturerId: number | null = 0;
    manufacturerName: string = '';
    primaryLocationId: number | null = 0;
}
