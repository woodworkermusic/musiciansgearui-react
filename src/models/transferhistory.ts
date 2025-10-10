import { EntityBase } from './entitybase.ts';

export class TransferHistory extends EntityBase 
{
    transferHistoryId: number;
    userGearId: number;
    userProfileId: number | null;
    clientId: number | null;
    transferDate: Date;
    purchasePrice: number | null;

    newUserGearId: number | null;
}