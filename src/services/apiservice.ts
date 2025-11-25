import axios from 'axios';

// const serviceApiBase = 'http://127.0.0.1:24680/api/';
const serviceApiBase = 'https://musiciansgearregistryapi-apim.azure-api.net/api/';
const ApiService = {
    sendPost: async<T>(postUrl: string, postData: any): Promise<T> => {
      return axios({
          method: 'post',
          headers: { 
              'Content-Type': 'application/json'
              , 'Access-Control-Allow-Origin': 'http://localhost:3000'
              , 'Ocp-Apim-Subscription-Key': 'd8267a12b3ea48a09a51b4db68bf3edd'
              },
          url: `${serviceApiBase}${postUrl}`,
          data: postData
        })
        .then(response => {
          return response.data;
        })
        .catch(e => {
          console.log(new Date().toLocaleString() + ' : ' + postUrl);
          console.log('ERROR:  post');
          console.log(e.message);
          return null;
        });
    },
        
    sendGet: async<T>(getUrl: string): Promise<T> => {
      return axios({
          method: 'get',
          headers: { 
              'Content-Type': 'application/json'
              , 'Access-Control-Allow-Origin': 'http://localhost:3000'
              , 'Ocp-Apim-Subscription-Key': 'd8267a12b3ea48a09a51b4db68bf3edd'
              },
          url: `${serviceApiBase}${getUrl}`
        })
        .then(response => {
          return response.data;
        })
        .catch(e => {
          console.log(new Date().toLocaleString() + ' : ' + getUrl);
          console.log('ERROR:  get');
          console.log(e.message);
          return null;
        });    
    }
};

export default ApiService;