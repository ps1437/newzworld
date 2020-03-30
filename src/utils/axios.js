import axios from 'axios';

axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';


  
const http =  axios.create({
      
    baseURL: "http://newsapi.org/v2/"
   
});



export default http;