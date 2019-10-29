import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    // baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        
        "API-KEY": "9d0128a1-0ef1-4a32-b120-4b30a2b557a3"
    }
})
export const userAPI = {

    getUsers(currentPage, pageSize) {

        return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
    }
}