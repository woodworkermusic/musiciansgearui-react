import { EntityBase } from './entitybase.ts';

export default class dto_GearModel extends EntityBase {
    gearModelId: number | null = 0;
    manufacturerId: number;
    gearTypeId: number;
    modelName: string;
    startDate: Date | null;
    endDate: Date | null;
}