import { EntityBase } from './entitybase.ts';

export class IncidentReportHistory extends EntityBase 
{
    incidentReportHistoryId: number;
    incidentReportId: number;
    statusText: string;
}