import { EntityBase } from './entitybase.ts';

export abstract class ImageEntityBase extends EntityBase 
{
        imageFile: string = '';
        imageType: string = '';
        imageData: [] = [];
}