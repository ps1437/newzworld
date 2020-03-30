import axios from '../utils/axios';


const API_KEY = "96160821c5194fed9dc50a562bbed555";

export const getHeadLines =async()=>{

    return await axios.get(`top-headlines?sources=google-news&apiKey=${API_KEY}`);
}



export const getHeadLinesByCountry =async(countryCode)=>{

    return await axios.get(`top-headlines?country=${countryCode}&apiKey=${API_KEY}`);
}

export const searchNews =async(topic)=>{

    return await axios.get(`everything?q=${topic}&apiKey=${API_KEY}`);
}
