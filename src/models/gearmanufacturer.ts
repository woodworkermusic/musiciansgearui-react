import { EntityBase } from './entitybase.ts';
import { GearModel } from './gearmodel.ts';

export class GearManufacturer extends EntityBase 
{
    manufacturerId: number;
    manufacturerName: string;
    primaryLocationId: number | null;
    gearModels: GearModel[] | null;
}
