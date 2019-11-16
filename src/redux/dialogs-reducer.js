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
    // defaultMessage: "write your message here"
}


let dialogsReducer = (dialogsPage = initialstate, action) => {
    switch (action.type) {
        // case ('MESSAGE_AREA_CHANGE'):{
        //     let dialogsPageCopy = {...dialogsPage, messages: dialogsPage.messages}
        //     dialogsPageCopy.defaultMessage = action.text
            
        //     return dialogsPageCopy}
        case ('ADD_MESSAGE'):{
            let newMessage = {
                id: 1,
                message: action.message
            }
            let dialogsPageCopy = {...dialogsPage, messages: dialogsPage.messages}
            dialogsPageCopy.messages.push(newMessage)
            // dialogsPageCopy.defaultMessage = ""
            
            return dialogsPageCopy
        }
        default:
                return dialogsPage    
    }
    
}


export const addMessageAC = (message) => {
    return { type: 'ADD_MESSAGE', message }
}
// export const onMessageTextAreaChangeAC = (newMessage) => {
//     return { type: 'MESSAGE_AREA_CHANGE', text: newMessage }
// }
export default dialogsReducer
