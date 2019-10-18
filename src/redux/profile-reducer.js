let initialstate = {
    posts: [
        { name: 'Петр Петров', id: 1, like: 40, postText: "To be or not to be?" },
        { name: 'Иван Иванов', id: 1, like: 2, postText: "To be or not to be?" },
        { name: 'Дед Мазай ', id: 1, like: 5, postText: "To be or not to be?" },
        { name: 'Сеня Круглый', id: 1, like: 1, postText: "To be or not to be?" },
        { name: 'Петр Петров', id: 1, like: 0, postText: "To be or not to be?" },
        { name: 'Павел Сорокин', id: 1, like: 0, postText: "To be or not to be?" }
    ],
    newPostText: "Write your post here!"
}


let profileReducer = (profilePage = initialstate, action) => {
    switch (action.type) {
        case ('ADD_POST'):{
            let newPost = {
                id: 1,
                postText: profilePage.newPostText,
                name: 'Борис Гребенщиков',
                like: 0
            }
            let profilePageCopy = {...profilePage, posts: profilePage.posts}
            profilePageCopy.posts.push(newPost)
            profilePageCopy.newPostText = ""
            return profilePageCopy}
        case ('TEXT_AREA_CHANGE'):{
            let profilePageCopy = {...profilePage, posts: profilePage.posts}
            profilePageCopy.newPostText = action.t
            return profilePageCopy}
        default:
                return profilePage
    }
    
}

export const addPostAC = () => {
    return { type: 'ADD_POST' }
}
export const onTextAreaChangeAC = (newText) => {
    return { type: 'TEXT_AREA_CHANGE', t: newText }
}

export default profileReducer