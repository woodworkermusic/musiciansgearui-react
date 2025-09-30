import axios from 'axios';

const ApiService = {
    sendPost: async<T>(postUrl: string, postData: any): Promise<T> => {

        return axios({
          method: 'post',
          headers: { 
              'Content-Type': 'application/json'
              , 'Access-Control-Allow-Origin': '*'
              },
          url: postUrl,
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
        return axios.get<any>(getUrl) 
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