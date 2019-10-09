let dialogsReducer = (dialogsPage, action)=>{
    switch(action.type){
        
        case ('MESSAGE_AREA_CHANGE'):
        dialogsPage.defaultMessage = action.text
        


        break;
        case ('ADD_MESSAGE'):
            let newMessage={
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
export default dialogsReducer
