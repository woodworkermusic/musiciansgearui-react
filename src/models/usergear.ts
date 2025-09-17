import { EntityBase } from './entitybase';
import { IncidentReport } from './incidentreport';
import { GearImage } from './imageentities';

export class UserGear extends EntityBase 
{
    userGearId: number;
    userProfileId: number;
    isActive: boolean;
    gearModelId: number;

    serialNumber: string;
    modelNumber: string;
    dateAcquired: Date | null;
    isOriginal: boolean;
    gearNotes: string;

    incidentReports: IncidentReport[] = [];
    gearImages: GearImage[] = [];
}