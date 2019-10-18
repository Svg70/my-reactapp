import React from 'react'
import Dialogs from './Dialogs'
import { onMessageTextAreaChangeAC, addMessageAC } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';

// const DialogsContainer = (props) => {
    
//     let onMessageTextAreaChange = (newMessage) => {
       
//         props.dispatch(onMessageTextAreaChangeAC(newMessage))
//     }
//     let addMessage = () => {
//         props.dispatch(addMessageAC())
//     }
    
    
//     return <div>
//         <Dialogs onMessageTextAreaChange = {onMessageTextAreaChange} 
//         addMessage = {addMessage} dialogsPage = {props.dialogsPage}/>
//     </div>
// }


const mapStateToProps = (store) =>{
    return{dialogsPage: store.dialogsPage}
}
const mapDispatchToProps = (dispatch) =>{
    
    return{
        onMessageTextAreaChange:(newMessage) =>{
            dispatch(onMessageTextAreaChangeAC(newMessage))
        },
        addMessage:() =>{
            dispatch(addMessageAC())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer