import ApiService from './apiservice.ts';
import dto_GearManufacturer from '../models/dto_gearmanufacturer.ts';
import { GearManufacturer } from '../models/gearmanufacturer.ts';

const svcUrlExtension = 'Manufacturer';

const GearManufacturerService = {
    add: async(manufacturerName: string
        , isActive: boolean
        , updatedBy: string
        ): Promise<GearManufacturer> => {
        var newManufacturer = new dto_GearManufacturer();

        newManufacturer.updatedBy = updatedBy;
        newManufacturer.active = isActive;
        newManufacturer.manufacturerName = manufacturerName;

        return ApiService.sendPost<GearManufacturer>(svcUrlExtension, newManufacturer);
    },

    update: (id: number
        , isActive: boolean
        , updatedBy: string
    )=> {

    },

    delete: ()=> {

    },

    get: (id: number)=> {
        return ApiService.sendGet(`${svcUrlExtension}/${id}`);
    },

    //     sendPost: async<T>(postUrl: string, postData: any): Promise<T> => {

    getMany: async(): Promise<GearManufacturer[]> => {
        var search = {
            startsWith: '',
            pageNumber: 1,
            pageSize: 100,
            includeDeleted: false
        };

        return ApiService.sendPost<GearManufacturer[]>(`${svcUrlExtension}/Search`, search);
    }
};

export default GearManufacturerService;