import ApiService from './apiservice.ts';
import dto_GearModel from '../models/dto_gearmodel.ts';
import { GearModel } from '../models/gearmodel.ts';

const svcUrlExtension = 'GearModel';

const GearModelService = {
    add: async(modelName: string
        , isActive: boolean
        , gearTypeId: number
        , manufacturerId: number
        , updatedBy: string
        ): Promise<GearModel> => {
        var newData = new dto_GearModel();

        newData.updatedBy = updatedBy;
        newData.active = isActive;
        newData.modelName = modelName;
        newData.manufacturerId = manufacturerId;
        newData.gearTypeId = gearTypeId;

        return ApiService.sendPost<GearModel>(svcUrlExtension, newData);
    },

    update: (id: number
        , isActive: boolean
        , updatedBy: string
    )=> {

    },

    delete: ()=> {

    },

    get: async(id: number): Promise<GearModel> => {
        return ApiService.sendGet<GearModel>(`${svcUrlExtension}/${id}`);
    },

    //     sendPost: async<T>(postUrl: string, postData: any): Promise<T> => {

    getMany: async(): Promise<GearModel[]> => {
        var search = {
            startsWith: '',
            pageNumber: 1,
            pageSize: 100,
            includeDeleted: false
        };

        return ApiService.sendPost<GearModel[]>(`${svcUrlExtension}/Search`, search);
    },

    getByManufacturerAndType: async(manufacturerId: number, gearTypeId: number): Promise<GearModel[]> => {
        return ApiService.sendGet<GearModel[]>(`${svcUrlExtension}/manufacturer/${manufacturerId}/geartype/${gearTypeId}`);
    }
};

export default GearModelService;