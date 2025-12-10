import axios from 'axios';
import { ApiMethod } from '../enums/apimethod.ts';

// const serviceApiBase = 'https://localhost:44326/api/';
const serviceApiBase = 'https://musiciansgearregistryapi-apim.azure-api.net/api/';

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
          url: `${serviceApiBase}${targetUrl}`,
          data: payloadData
        })
        .then(response => {
          return response.data;
        })
        .catch(e => {
          processError(e, targetUrl, method);
          return null;
        });
    }
};

const processError = (e: any, targetUrl: string, method: string)=> {
  console.log(new Date().toLocaleString() + ' : ' + targetUrl);
  console.log('ERROR:  ' + method);
  console.log(e.message); 
}

export default ApiService;