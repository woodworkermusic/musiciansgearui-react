import ApiService from './apiservice.ts';
import { Buffer } from 'buffer';

const svcUrlExtension = 'ImageContent';

const ImageService = {
    add: async(): Promise<any> => {

    },

    update: async(): Promise<any> => {

    },

    delete: async(): Promise<any> => {

    },

    get: async(id: number, imageType: string): Promise<any> => {
        return ApiService.sendGet(`${svcUrlExtension}/${imageType}/${id}`);
    },

    getIdList: (id: number, imageType: string) => {
        
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