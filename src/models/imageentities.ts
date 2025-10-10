import { EntityBase } from './entitybase.ts';

export class ImageBase extends EntityBase 
{
    imageId: number;
    imageFileName: string;
    // imageData: ?
    folderId: string;
    imageUrl: string;
}

export class GearImage extends ImageBase 
{
    userGearId: number;
}

export class ModelSampleImage extends ImageBase 
{
    gearModelId: number;
}

export class SubTypeSampleImage extends ImageBase
{
    gearSubTypeId: number;
}