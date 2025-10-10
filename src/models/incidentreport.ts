import { EntityBase } from './entitybase.ts';

export class IncidentReport extends EntityBase 
{
    incidentReportId: number;
    userGearId: number;
    reportDate: Date;
    dateClosed: Date | null;
    reportedToId: boolean;
}