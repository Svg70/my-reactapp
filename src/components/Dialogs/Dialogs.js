import React from 'react';
import styles from './Dialogs.module.css';
import {NavLink} from 'react-router-dom'
const DialogsItem = (props)=>{
    return (
        <div><NavLink to= {'/dialogs/'+ props.id}>{props.name}</NavLink></div>
    )
}
const Message =(props) => {
    return <div>{props.message}</div>
}

let dialogsItems = [
    {id: 1, name: "Серега"},
    {id: 2, name: "Жора"},
]
let messages = [
    {id: 1, message: "Серега"},
    {id: 2, message: "When will you learn React?"},
    {id: 3, message: "Серега"},
    {id: 4, message: "When will you learn React?"},
    {id: 5, message: "Серега"},
    {id: 6, message: "When will you learn React?"}
]

let dialogItemsArray = dialogsItems.map( d => <DialogsItem id ={d.id} name ={d.name}/>)
let messagesArray = messages.map( m => <Message id ={m.id} message ={m.message}/>)

const Dialogs = () => {
    return (
        <div>
            <div className={styles.dialogsWrapper}>
                <div className={styles.names}>
                    {dialogItemsArray}
                </div>
                <div className={styles.messages}>
                    {messagesArray}
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
