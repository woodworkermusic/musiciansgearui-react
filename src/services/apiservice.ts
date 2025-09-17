import axios from 'axios';

const ApiService = {
    sendPost: async<T>(postUrl: string, postData: any): Promise<T> => {
        console.log(new Date().toLocaleString());
        console.log(postUrl);

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
          console.log('ERROR');
          console.log(e.message);
          alert(e.message);
        });
    },
        
    sendGet: async<T>(getUrl: string): Promise<T> => {
        console.log(new Date().toLocaleString());
        console.log(getUrl);
          
        return axios.get<any>(getUrl) 
          .then(response => {
            return response.data;
          })
          .catch(e => {
            // Handle the error
            console.log('ERROR');
            console.log(e.message);
            alert(e);
            return null;
          });  
    }
};

export default ApiService;