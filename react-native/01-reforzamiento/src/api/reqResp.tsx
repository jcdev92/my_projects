import axios from "axios";

export const reqResoApi = axios.create({
    baseURL: 'https://reqres.in/api'
});