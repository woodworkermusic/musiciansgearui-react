import { EntityBase } from './entitybase';

export class IncidentReportHistory extends EntityBase 
{
    incidentReportHistoryId: number;
    incidentReportId: number;
    statusText: string;
}