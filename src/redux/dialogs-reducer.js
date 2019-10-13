let initialstate = {
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


let dialogsReducer = (dialogsPage = initialstate, action) => {
    switch (action.type) {
        case ('MESSAGE_AREA_CHANGE'):
            dialogsPage.defaultMessage = action.text
            break;
        case ('ADD_MESSAGE'):
            let newMessage = {
                id: 1,
                message: dialogsPage.defaultMessage
            }
            dialogsPage.messages.push(newMessage)
            dialogsPage.defaultMessage = ""
            break;
        default:
            break
    }
    return dialogsPage
}


export const addMessageAC = () => {
    return { type: 'ADD_MESSAGE' }
}
export const onMessageTextAreaChangeAC = (newMessage) => {
    return { type: 'MESSAGE_AREA_CHANGE', text: newMessage }
}
export default dialogsReducer
