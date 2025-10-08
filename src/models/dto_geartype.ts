import { EntityBase } from './entitybase.ts';

export default class dto_GearType extends EntityBase
{
    gearTypeId: number | null = 0;
    gearTypeName: string = '';
    active: boolean = true;
    updatedBy: string = '';
}
