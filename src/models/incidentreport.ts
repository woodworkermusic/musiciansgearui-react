import { EntityBase } from './entitybase';

export class IncidentReport extends EntityBase 
{
    incidentReportId: number;
    userGearId: number;
    reportDate: Date;
    dateClosed: Date | null;
    reportedToId: boolean;
}