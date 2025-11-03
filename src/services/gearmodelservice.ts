import ApiService from './apiservice.ts';
import dto_GearModel from '../models/dto_gearmodel.ts';
import { GearModel } from '../models/gearmodel.ts';

const svcUrlExtension = 'GearModel';

const GearModelService = {
    add: async(newModel: dto_GearModel
        ): Promise<GearModel> => {
        return ApiService.sendPost<GearModel>(svcUrlExtension, newModel);
    },

    update: (gearModel: dto_GearModel
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