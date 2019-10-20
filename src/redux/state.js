import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"

let store = {
    _state: {
        profilePage: {
            posts: [
                { name: 'Петр Петров', id: 1, like: 40, postText: "To be or not to be?" },
                { name: 'Иван Иванов', id: 1, like: 2, postText: "To be or not to be?" },
                { name: 'Дед Мазай ', id: 1, like: 5, postText: "To be or not to be?" },
                { name: 'Сеня Круглый', id: 1, like: 1, postText: "To be or not to be?" },
                { name: 'Петр Петров', id: 1, like: 0, postText: "To be or not to be?" },
                { name: 'Павел Сорокин', id: 1, like: 0, postText: "To be or not to be?" }
            ],
            newPostText: "Write your post here!"
        },
        dialogsPage: {
            dialogsItems: [
                { id: 1, name: "Серега" },
                { id: 2, name: "Жора" },
            ],
            messages: [
                { id: 1, message: "Серега" },
                { id: 2, message: "When will you learn React?" },
                { id: 3, message: "Серега" },
                { id: 4, message: "When will you learn React?" },
                { id: 5, message: "Серега" },
                { id: 6, message: "When will you learn React?" }
            ],
            defaultMessage: "write your message here"
        }
    },

    _callSubscriber() {

    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)
    }

}


export default store