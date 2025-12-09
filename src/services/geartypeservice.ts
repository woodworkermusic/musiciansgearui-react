import ApiService from './apiservice.ts';
import { ApiMethod } from '../enums/apimethod.ts';
import dto_GearType from '../models/dto_geartype.ts';
import { GearType } from '../models/geartype.ts';

const svcUrlExtension = 'GearType';

const GearTypeService = {
    add: async(typeName: string
        , isActive: boolean
        , updatedBy: string
        ): Promise<GearType> => {
        var newData = new dto_GearType();

        newData.updatedBy = updatedBy;
        newData.active = isActive;
        newData.gearTypeName = typeName;

        return ApiService.send<GearType>(svcUrlExtension, ApiMethod.post, newData);
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

    getMany: async(): Promise<GearType[]> => {
        var search = {
            startsWith: '',
            pageNumber: 1,
            pageSize: 100,
            includeDeleted: false
        };

        return ApiService.send<GearType[]>(`${svcUrlExtension}/Search`, ApiMethod.post, search);
    },

    getByManufacturer: async(id: number): Promise<GearType[]> => {
        return ApiService.send<GearType[]>(`${svcUrlExtension}/manufacturer/${id}`, ApiMethod.get, null);
    }
};

export default GearTypeService;