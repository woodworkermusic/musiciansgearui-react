import axios from 'axios';

const serviceApiBase = 'https://localhost:44326/api/';

const ApiService = {
    sendPost: async<T>(postUrl: string, postData: any): Promise<T> => {

        return axios({
          method: 'post',
          headers: { 
              'Content-Type': 'application/json'
              , 'Access-Control-Allow-Origin': '*'
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
        return axios.get<any>(`${serviceApiBase}${getUrl}`) 
          .then(response => {
            return response.data;
          })
          .catch(e => {
            // Handle the error
            console.log(new Date().toLocaleString() + ' : ' + getUrl);
            console.log('ERROR:  get');
            console.log(e.message);
            return null;
          });  
    }
};

export default ApiService;