
let state = {
    profilePage:{
        posts:[
        {name:'Петр Петров', id: 1, like: 40, postText:"To be or not to be?"},
        {name:'Иван Иванов', id: 1, like: 2, postText:"To be or not to be?"},
        {name:'Дед Мазай ', id: 1, like: 5, postText:"To be or not to be?"},
        {name:'Сеня Круглый', id: 1, like: 1, postText:"To be or not to be?"},
        {name:'Петр Петров', id: 1, like: 0, postText:"To be or not to be?"},
        {name:'Павел Сорокин', id: 1, like: 0, postText:"To be or not to be?"}
        ],
        newPostText: "Write your post here!"
    },
    dialogsPage:{
        dialogsItems:[
        {id: 1, name: "Серега"},
        {id: 2, name: "Жора"},
    ],
        messages:[
        {id: 1, message: "Серега"},
        {id: 2, message: "When will you learn React?"},
        {id: 3, message: "Серега"},
        {id: 4, message: "When will you learn React?"},
        {id: 5, message: "Серега"},
        {id: 6, message: "When will you learn React?"}
    ]}
}

let rerenderEntireTree = ()=>{
    
}
export let addPost =(newPostText) =>  {
    debugger
    let newPost = {
        id:1,
        postText: newPostText,
        name: 'Борис Гребенщиков',
        like: 0
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}
export let onTextAreaChange = (newPostText) => {
    let postChanges = newPostText
    state.profilePage.newPostText = postChanges
    rerenderEntireTree(state)
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer
}

export default state