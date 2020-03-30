import axios from 'axios';

axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';


  
const http =  axios.create({
      
    baseURL: "https://newsapi.org/v2/",
    headers: {
        'accept-language': 'en_US',
        'content-type': 'application/x-www-form-urlencoded'
    }
   
});



export default http;