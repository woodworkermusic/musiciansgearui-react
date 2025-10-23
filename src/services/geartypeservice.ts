import ApiService from './apiservice.ts';
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

        return ApiService.sendPost<GearType>(svcUrlExtension, newData);
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

    getMany: async(): Promise<GearType[]> => {
        var search = {
            startsWith: '',
            pageNumber: 1,
            pageSize: 100,
            includeDeleted: false
        };

        return ApiService.sendPost<GearType[]>(`${svcUrlExtension}/Search`, search);
    },

    getByManufacturer: async(id): Promise<GearType[]> => {
        return ApiService.sendGet<GearType[]>(`${svcUrlExtension}/manufacturer/${id}`);
    }
};

export default GearTypeService;