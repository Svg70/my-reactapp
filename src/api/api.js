import * as axios from "axios";
import { isTSConstructSignatureDeclaration } from "@babel/types";



const instance = axios.create({
    withCredentials: true,
    // baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        
        "API-KEY": "9d0128a1-0ef1-4a32-b120-4b30a2b557a3"
    }
})
export const userAPI = {

    getUsers(currentPage, pageSize) {

        return instance.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
    },
    follow(userId) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0//follow/${userId}`, {})
    },
    unfollow(userId){
        return instance.delete(`https://social-network.samuraijs.com/api/1.0//follow/${userId}`)
    },
    auth(){
        return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
    },
    profileShow(userId){
        return instance.get(`https://social-network.samuraijs.com/api/1.0//profile/${userId}`)
    }
    
}