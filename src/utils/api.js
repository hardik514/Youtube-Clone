import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com"

const options = {
    params: {
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'x-rapidapi-key': process.env.REACT_APP_YOUTUBE_API_KEY,
      'x-rapidapi-host': "youtube138.p.rapidapi.com"
    }
  };

export const fetchDataFromApi = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}` , options);
    return data;
};  

// import axios from 'axios';

// const BASE_URL = 'https://youtube138.p.rapidapi.com';

// const options = {
//   headers: {
//     'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
//     'X-RapidAPI-Host': process.env.REACT_APP_RAPIDAPI_HOST,
//   },
// };

// export const fetchDataFromApi = async (url) => {
//   console.log('Using API Key:', process.env.REACT_APP_RAPIDAPI_KEY);
//   console.log('Using API Host:', process.env.REACT_APP_RAPIDAPI_HOST);

//   try {
//     const { data } = await axios.get(`${BASE_URL}/${url}`, options);
//     return data;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     throw error;
//   }
// };

