import axios from "axios";
import {base_url} from "./paths";


export const create = () => {
    return axios.create({
        responseType: 'json',
        baseURL: base_url
    })
}