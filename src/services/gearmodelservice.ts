import ApiService from './apiservice.ts';
import { ApiMethod } from '../enums/apimethod.ts';
import dto_GearModel from '../models/dto_gearmodel.ts';
import { GearModel } from '../models/gearmodel.ts';

const svcUrlExtension = 'GearModel';

const GearModelService = {
    add: async(newModel: dto_GearModel
        ): Promise<GearModel> => {
        return ApiService.send<GearModel>(svcUrlExtension, ApiMethod.post, newModel);
    },

    update: (gearModel: dto_GearModel
    )=> {

    },

    delete: ()=> {

    },

    get: async(id: number): Promise<GearModel> => {
        return ApiService.send<GearModel>(`${svcUrlExtension}/${id}`, ApiMethod.get, null);
    },

    getMany: async(): Promise<GearModel[]> => {
        var search = {
            startsWith: '',
            pageNumber: 1,
            pageSize: 100,
            includeDeleted: false
        };

        return ApiService.send<GearModel[]>(`${svcUrlExtension}/Search`, ApiMethod.post, search);
    },

    getByManufacturerAndType: async(manufacturerId: number, gearTypeId: number): Promise<GearModel[]> => {
        return ApiService.send<GearModel[]>(`${svcUrlExtension}/manufacturer/${manufacturerId}/geartype/${gearTypeId}`, ApiMethod.get, null);
    }
};

export default GearModelService;