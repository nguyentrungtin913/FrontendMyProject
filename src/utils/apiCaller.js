import axios from "axios";
import * as Config from '../constants/Config';


export default function callAPI(endpoint, method = 'GET', body) {
    let data = JSON.stringify(body);

    // console.log('============');
    // console.log(method);
    // console.log(`${Config.API_URL}/${endpoint}`);
    // console.log(data);
    // console.log('============');
    

    return axios({
        method: method,
        withCredentials: false,
        url: `${Config.API_URL}/${endpoint}`,
        data: data,
        headers: {
        'Content-Type': 'application/json'
      },
    }).catch(err => {
        console.log(err);
    });
}