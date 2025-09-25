import ApiService from './apiservice.ts';
import dto_GearManufacturer from '../models/dto_gearmanufacturer.ts';
import { GearManufacturer } from '../models/gearmanufacturer.ts';

const serviceApiUrl = 'https://localhost:44326/api/Manufacturer';

const GearManufacturerService = {
    add: (manufacturerName: string
        , isActive: boolean
        , updatedBy: string
        )=> {
        var newManufacturer = new dto_GearManufacturer();

        newManufacturer.updatedBy = updatedBy;
        newManufacturer.isActive = isActive;
        newManufacturer.manufacturerName = manufacturerName;

        ApiService.sendPost(serviceApiUrl, newManufacturer);
    },

    update: (id: number
        , isActive: boolean
        , updatedBy: string
    )=> {

    },

    delete: ()=> {

    },

    get: (id: number)=> {
        return ApiService.sendGet(`${serviceApiUrl}/${id}`);
    },

    //     sendPost: async<T>(postUrl: string, postData: any): Promise<T> => {

    getMany: async(): Promise<GearManufacturer[]> => {
        var search = {
            startsWith: '',
            pageNumber: 1,
            pageSize: 10,
            includeDeleted: false
        };

        return ApiService.sendPost<GearManufacturer[]>(`${serviceApiUrl}/Search`, search);
    }
};

export default GearManufacturerService;