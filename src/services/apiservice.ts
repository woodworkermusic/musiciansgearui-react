import axios from 'axios';
import { ApiMethod } from '../enums/apimethod.ts';

// const serviceApiBase = 'https://localhost:44326';
const serviceApiBase = 'https://musiciansgearregistryapi-apim.azure-api.net';

const apiHeaders = {
    'Content-Type': 'application/json'
    , 'Access-Control-Allow-Origin': 'http://localhost:3000'
    , 'Ocp-Apim-Subscription-Key': 'd8267a12b3ea48a09a51b4db68bf3edd'
};

const ApiService = {
    send: async<T>(targetUrl: string, method: ApiMethod, payloadData: any): Promise<T> => {
      return axios({
          method: method,
          headers: apiHeaders,
          url: `${serviceApiBase}/api/${targetUrl}`,
          data: payloadData
        })
        .then(response => {
          return response.data;
        })
        .catch(e => {
          console.log(new Date().toLocaleString() + ' : ' + targetUrl);
          console.log('ERROR:  ' + method);
          console.log(e.message); 
          return null;
        });
    },

    healthCheck: async(): Promise<boolean> => {
      return axios({
          method: ApiMethod.get,
          headers: apiHeaders,
          url: `${serviceApiBase}/Health`
        })
        .then((response) => {
          return (response.data.toUpperCase() === 'HEALTHY');
        })
        .catch(e => {
          if (e.response) {
            console.log('error response:  ' + e.response);
          }

          return false;
        })
      }
};

export default ApiService;