import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.eleddie.com/api',
    // withCredentials: true
})

export default instance