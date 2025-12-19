import ApiService from './apiservice.ts';
import { ApiMethod } from '../enums/apimethod.ts';

const HealthService = {
    check: async(): Promise<boolean> => {
        return ApiService.send<string>('Health', ApiMethod.get, null)
            .then((response: string) => {
                return (response.toUpperCase() === 'HEALTHY');
            })
            .catch((error) => {
                if (error.response) {
                    console.log('error response:  ' + error.response);
                }
                return false;
            });
        }
    }

export default HealthService;
