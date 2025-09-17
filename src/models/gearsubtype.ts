import { EntityBase } from './entitybase';

export class GearSubType extends EntityBase {
    gearSubTypeId: number;
    gearTypeId: number;
    isActive: boolean;
    subTypeName: string;
}