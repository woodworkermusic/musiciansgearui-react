import axios from 'axios';

// const serviceApiBase = 'http://127.0.0.1:24680/api/';
const serviceApiBase = 'https://musiciansgearregistryapi-apim.azure-api.net/api/';

const apiHeaders = {
    'Content-Type': 'application/json'
    , 'Access-Control-Allow-Origin': 'http://localhost:3000'
    , 'Ocp-Apim-Subscription-Key': 'd8267a12b3ea48a09a51b4db68bf3edd'
};

const ApiService = {
    send: async<T>(targetUrl: string, method: string, payloadData: any): Promise<T> => {
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
    },
    
    sendPost: async<T>(postUrl: string, postData: any): Promise<T> => {
      return axios({
          method: 'post',
          headers: apiHeaders,
          url: `${serviceApiBase}${postUrl}`,
          data: postData
        })
        .then(response => {
          return response.data;
        })
        .catch(e => {
          processError(e, postUrl, 'POST');
          return null;
        });
    },
        
    sendGet: async<T>(getUrl: string): Promise<T> => {
      return axios({
          method: 'get',
          headers: apiHeaders,
          url: `${serviceApiBase}${getUrl}`
        })
        .then(response => {
          return response.data;
        })
        .catch(e => {
          processError(e, getUrl, 'GET');
          return null;
        });    
    }, 

    sendPut: async<T>(putUrl: string, putData: any): Promise<T> => {
      return ApiService.send(putUrl, 'PUT', putData);
    },

    sendDelete: {}
};

const processError = (e: any, targetUrl: string, method: string)=> {
  console.log(new Date().toLocaleString() + ' : ' + targetUrl);
  console.log('ERROR:  ' + method);
  console.log(e.message); 
}

export default ApiService;