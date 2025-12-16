import { EntityBase } from './entitybase.ts';
import { GearModel } from './gearmodel.ts';

export class GearManufacturer extends EntityBase 
{
    manufacturerId: number = 0;
    manufacturerName: string = '';
    primaryLocationId: number | null = 0;
    gearModels: GearModel[] = [];
}
