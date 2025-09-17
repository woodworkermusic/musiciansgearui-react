import { EntityBase } from './entitybase.ts';
import { GearModel } from './gearmodel.ts';

export class GearManufacturer extends EntityBase 
{
    ManufacturerId: number;
    ManufacturerName: string;
    Active: boolean;
    PrimaryLocationId: number | null;

    GearModels: GearModel[] | null;
}
