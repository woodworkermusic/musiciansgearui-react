import { EntityBase } from './entitybase';
import { GearSubType } from './gearsubtype';

export class GearType extends EntityBase 
{
    gearTypeId: number;
    isActive: boolean;
    gearTypeName: string;

    gearSubTypes: GearSubType[] = [];
}