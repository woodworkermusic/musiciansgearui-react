import ApiService from './apiservice.ts';
import { dto_GearManufacturer } from '../models/dto_gearmanufacturer.ts';
import { GearManufacturer } from '../models/gearmanufacturer.ts';

const serviceApiUrl = 'https://localhost:44326/api/Manufacturer';

const GearManufacturerService = {
    add: (manufacturerName: string
        , isActive: boolean
        , createdBy: string
        )=> {
        var newManufacturer = new dto_GearManufacturer();

        newManufacturer.createdBy = createdBy;
        newManufacturer.isActive = isActive;
        newManufacturer.manufacturerName = manufacturerName;

        ApiService.sendPost(serviceApiUrl, newManufacturer);
    },

    update: ()=> {

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