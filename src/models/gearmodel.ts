import { EntityBase } from './entitybase.ts';

export class GearModel extends EntityBase {
    gearModelId: number;
    manufacturerId: number;
    gearTypeId: number;
    modelName: string;
    startYear: number | null;
    endYear: number | null;
}