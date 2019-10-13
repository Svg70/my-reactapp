import React from 'react'
import Dialogs from './Dialogs'
import { onMessageTextAreaChangeAC, addMessageAC } from '../../redux/dialogs-reducer';

const DialogsContainer = (props) => {
    
    let onMessageTextAreaChange = (newMessage) => {
       
        props.dispatch(onMessageTextAreaChangeAC(newMessage))
    }
    let addMessage = () => {
        props.dispatch(addMessageAC())
    }
    
    
    return <div>
        <Dialogs onMessageTextAreaChange = {onMessageTextAreaChange} 
        addMessage = {addMessage} dialogsPage = {props.dialogsPage}/>
    </div>
}
export default DialogsContainer