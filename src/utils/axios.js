import axios from 'axios';
  
const http =  axios.create({
      
    baseURL: "https://newsapi.org/v2/"
   
});

export default http;