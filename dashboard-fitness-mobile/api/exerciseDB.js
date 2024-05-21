// npm i axios
import axios from 'axios';
import { rapidApiKey } from '../constant';

const baseUrl = 'https://exercisedb.p.rapidapi.com';

const apiCall = async (url, params) => {
  try {
    const options = {
      method: 'GET',
      url,
      params,
      headers: {
        'X-RapidAPI-Key': rapidApiKey,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    };

    const response = await axios.request(options);
    return response.data; // Return the data from the API response
  } catch (err) {
    console.log('error', err.message);
     // Return null or handle the error as needed
  }
};

export const fetchExercisesByBodypart = async (bodyPart) => {
  // Use backticks for template literals
  const data = await apiCall(`${baseUrl}/exercises/bodyPart/${bodyPart}`);
  return data;
};
