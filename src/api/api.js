import * as axios from "axios";
import { isTSConstructSignatureDeclaration } from "@babel/types";



const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        
        "API-KEY": "9d0128a1-0ef1-4a32-b120-4b30a2b557a3"
    }
})
export const userAPI = {

    getUsers(currentPage, pageSize) {

        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`, {})
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`)
    },

    profileShow(userId){
        return profileAPI.getProfile(userId)
    }  
}

export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId){ 
        return instance.get(`profile/status/`+ userId)
    },
    updateStatus(status){
        return instance.put(`profile/status/`, {status: status})
    }
}


export const authAPI = {
    auth(){
        return instance.get(`auth/me`)
    },
}

