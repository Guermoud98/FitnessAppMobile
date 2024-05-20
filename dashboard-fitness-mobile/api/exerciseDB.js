//npm i axios
import axios from 'axios'
import {rapidApiKey} from '../constant'
const baseUrl ='https://exercisedb.p.rapidapi.com'

const apiCall =async (url,params)=>
    {
      try{ 
        const options ={ 
            method:'GET',
            url ,
            params ,
            headers :{ 
                'X-RapidAPI-Key': rapidApiKey,
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'

            }


        }

      }catch(err)
      {
        console.log('error',err.message);
      }
    
    }
export const fetchExercisesByBodypart=async (bodypart)=>{ 
    let data =await apiCall(baseUrl+'/exercises/bodyPart/${bodyPart}');
    return data;
}


