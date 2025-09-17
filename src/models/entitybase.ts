export abstract class EntityBase {
    createdBy: string | null;
    createdOn: Date | null;
    modifiedBy: string | null;
    modifiedOn: Date | null;
    deletedBy: string | null;
    deletedOn: Date | null;
  }