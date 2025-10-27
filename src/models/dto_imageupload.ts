export abstract class ImageUploadBase
{
    ImageFile: string = '';
    ImageData: string = '';
    CreatedBy: string = '';
}

export class dto_GearModelImage extends ImageUploadBase 
{
    GearModelId: number = 0;
}

export class dto_GearTypeImage extends ImageUploadBase
{
    GearTypeId: number = 0;
}

export class dto_UserGearImage extends ImageUploadBase 
{
    UserGearId: number = 0;
}