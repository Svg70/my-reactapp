import React from 'react';
import styles from './Dialogs.module.css';
import { NavLink } from 'react-router-dom'
import {Redirect} from "react-router-dom";
import {reduxForm, Field} from 'redux-form'
import { Textarea } from '../../common/formControlls';
import { maxLengthCreator, required } from '../../utils/validator';


const DialogsItem = (props) => {
    return (
        <div><NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink></div>
    )
}

const Message = (props) => {
    return <div>{props.message}</div>
}

const Dialogs = (props) => {
debugger
    let dialogItemsArray = props.dialogsPage.dialogsItems.map(d => <DialogsItem id={d.id} name={d.name} />)
    let messagesArray = props.dialogsPage.messages.map(m => <Message id={m.id} message={m.message} />)
    let addNewMessage =(values)=>{
        props.addMessage(values.newMessageBody)
    }
// changed hoc WithAuthRedirect
// if(!props.authStatus)return <Redirect to={"/login"}/>

    return (
        <div>
            <div className={styles.dialogsWrapper}>
                <div className={styles.names}>
                    {dialogItemsArray}
                </div>
                <div className={styles.messages}>
                    {messagesArray}
                </div>
                <MessageReduxForm onSubmit ={addNewMessage}/>
            </div>
        </div>
    );
}

let maxLength20 = maxLengthCreator(20)
const AddMesageForm = (props) =>{
    return(
        <form onSubmit={props.handleSubmit}>
        <div>
                    <Field component = {Textarea} 
                    validate={[required, maxLength20 ]}
                    name="newMessageBody"
                    placeholder ="Enter your message"
                    />
                    <button>SendMessage!</button>
                </div>
        </form>
    )
}

const MessageReduxForm = reduxForm({
    form: 'dialogAddMessageForm'
  })(AddMesageForm)

export default Dialogs;
