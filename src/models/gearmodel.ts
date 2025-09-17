import { EntityBase } from './entitybase';

export class GearModel extends EntityBase {
    gearModelId: number;
    manufacturerId: number;
    gearSubTypeId: number;
    modelName: string;
    isActive: boolean;
    startDate: Date | null;
    endDate: Date | null;
}