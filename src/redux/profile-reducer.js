import { userAPI, profileAPI } from "../api/api"
import { statement } from "@babel/template"
const SET_USERS_STATUS = 'SET_USERS_STATUS'
let initialstate = {
    posts: [
        { name: 'Петр Петров', id: 1, like: 40, postText: "To be or not to be?" },
        { name: 'Иван Иванов', id: 2, like: 2, postText: "To be or not to be?" },
        { name: 'Дед Мазай ', id: 3, like: 5, postText: "To be or not to be?" },
        { name: 'Сеня Круглый', id: 4, like: 1, postText: "To be or not to be?" },
        { name: 'Петр Петров', id: 5, like: 0, postText: "To be or not to be?" },
        { name: 'Павел Сорокин', id: 6, like: 0, postText: "To be or not to be?" }
    ],
    newPostText: "Write your post here!",
    profilePhoto: 'https://i.pinimg.com/originals/8f/b4/13/8fb413f6905230fc7df7317c6ca4a292.jpg',
    fullName: 'Don Korleone',
    status: '',
    postId: 7
}


let profileReducer = (profilePage = initialstate, action) => {
    switch (action.type) {
        case ('ADD_POST'):{
            let nextPostId = profilePage.postId+1
            let newPost = {
                id: nextPostId,
                postText: action.post,
                name: 'Борис Гребенщиков',
                like: 0
            }
            let profilePageCopy = {...profilePage, posts: profilePage.posts}
            profilePageCopy.posts.push(newPost)
            profilePageCopy.newPostText = ""
            return profilePageCopy}
        // case ('TEXT_AREA_CHANGE'):{
        //     let profilePageCopy = {...profilePage, posts: profilePage.posts}
        //     profilePageCopy.newPostText = action.t
        //     return profilePageCopy}
        case ('SET_PROFILE'):{
            let newProfilePage = {...profilePage}
            newProfilePage.fullName =  action.response.fullName
            newProfilePage.profilePhoto = action.response.photos.large
            return newProfilePage
        }
            // [{...profilePage, profilePhoto: },
            //     {...profilePage, fullName: action.response.fullName}]
        case SET_USERS_STATUS:{
            debugger
            return{
                
                ...profilePage,
                status: action.status}
        }
            default:
                return profilePage
    }
    
}

export const addPostAC = (post) => {
    return { type: 'ADD_POST',post }
}
// export const onTextAreaChangeAC = (newText) => {
//     return { type: 'TEXT_AREA_CHANGE', t: newText }
// }
export const setProfileAC = (data) => {
    return { type: 'SET_PROFILE', response: data}
}

export const profileShowThunkCreator = (userId) =>{
    return (dispatch) =>{
        userAPI.profileShow(userId)
        .then(response => {  
                 dispatch(setProfileAC(response.data))
            }
        )
    }
}
export const setStatus = (status) =>{
    return{type: SET_USERS_STATUS, status}
}
export const getStatus = (userId) =>(dispatch) =>{
    profileAPI.getStatus(userId).then(response =>{
        dispatch(setStatus(response.data))
    })
}

export const updateStatus = (status) =>(dispatch) =>{
    profileAPI.updateStatus(status).then(response =>{
        debugger
        if (response.data.resultCode === 0)
        dispatch(setStatus(status))
    })
}

export default profileReducer