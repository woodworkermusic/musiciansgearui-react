import { EntityBase } from './entitybase.ts';
import { IncidentReport } from './incidentreport.ts';
import { GearImage } from './imageentities.ts';

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