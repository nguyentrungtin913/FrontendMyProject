import axios from "axios";
import * as Config from '../constants/Config';


export default function callAPI(endpoint, method = 'GET', body) {
    //let data = JSON.stringify(body);

    // console.log('======<call API>======');
    // console.log(method);
    // console.log(`${Config.API_URL}/${endpoint}`);
    // console.log(body);
    // console.log('============');
    
    return axios({
        method: method,
        withCredentials: false,
        url: `${Config.API_URL}/${endpoint}`,
        data: body,
        headers: {
        'Content-Type': 'application/json'
      },
    }).catch(err => {
        console.log(err.response.data);
    });
}