import ApiService from './apiservice.ts';
import { ApiMethod } from '../enums/apimethod.ts';
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

        return ApiService.send<GearManufacturer>(svcUrlExtension, ApiMethod.post, newManufacturer);
    },

    update: (id: number
        , isActive: boolean
        , updatedBy: string
    )=> {

    },

    delete: ()=> {

    },

    get: (id: number)=> {
        return ApiService.send(`${svcUrlExtension}/${id}`, ApiMethod.get, null);
    },

    getMany: async(): Promise<GearManufacturer[]> => {
        var search = {
            startsWith: '',
            pageNumber: 1,
            pageSize: 100,
            includeDeleted: false
        };

        return ApiService.send<GearManufacturer[]>(`${svcUrlExtension}/Search`, ApiMethod.post, search);
    }
};

export default GearManufacturerService;