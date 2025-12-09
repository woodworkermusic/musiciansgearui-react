import ApiService from './apiservice.ts';
import { ApiMethod } from '../enums/apimethod.ts';
import { Buffer } from 'buffer';

const svcUrlExtension = 'ImageContent';

const ImageService = {
    add: async(): Promise<any> => {

    },

    update: async(): Promise<any> => {

    },

    delete: async(id: number, imageType: string): Promise<any> => {
        return ApiService.send(`${svcUrlExtension}/${imageType}/${id}`, ApiMethod.delete, null);
    },

    get: async(id: number, imageType: string): Promise<any> => {
        return ApiService.send(`${svcUrlExtension}/${imageType}/${id}`, ApiMethod.get, null);
    },

    getIdList: (id: number, imageType: string) => {
        return ApiService.send(`${svcUrlExtension}/${imageType}/${id}/idlist`, ApiMethod.get, null);
    },

    encodeDataUrl: (dataString: string) => {
        let bufferObj = Buffer.from(dataString, "utf8");
        return bufferObj.toString("base64");
    },

    decodeDataUrl: (imageData: any) => {
        let bufferObj = Buffer.from(imageData, "base64");
        return bufferObj.toString("utf8");
    }
};

export default ImageService;