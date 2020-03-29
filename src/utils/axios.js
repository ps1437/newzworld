import axios from 'axios';

axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';

axios.defaults.headers.common = {
    ...axios.defaults.headers.common,
    "Content-Type": 'application/json',
 };
 axios.defaults.preflightContinue = true;
 //axios.defaults.crossDomain = true;

 
 const API_KEY = "96160821c5194fed9dc50a562bbed555";
const http =  axios.create({
      
    baseURL: "http://newsapi.org/v2/top-headlines?sources=google-news&apiKey=${API_KEY}",
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': '*',
    },
});



export default http;