import axios from 'axios';


const BASE_URL = "http://localhost:4000/"

export function registerNewUser(user) {
    alert("i am in register");
    console.log('user',user);

    let url = `${BASE_URL}user/register`;
    let promise = axios.post(url,user);
    console.log('promise', promise)
    return {
        type:'REGISTER',
        payload:promise
    }
}