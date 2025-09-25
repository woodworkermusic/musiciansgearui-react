import axios from 'axios';

const ApiService = {
    sendPost: async<T>(postUrl: string, postData: any): Promise<T> => {
        console.log(new Date().toLocaleString() + ' : ' + postUrl);

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
          console.log('ERROR:  post');
          console.log(e.message);
          return null;
        });
    },
        
    sendGet: async<T>(getUrl: string): Promise<T> => {
      console.log(new Date().toLocaleString() + ' : ' + getUrl);
          
        return axios.get<any>(getUrl) 
          .then(response => {
            return response.data;
          })
          .catch(e => {
            // Handle the error
            console.log('ERROR:  get');
            console.log(e.message);
            return null;
          });  
    }
};

export default ApiService;