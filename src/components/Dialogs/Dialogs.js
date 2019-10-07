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





const Dialogs = (props) => {

    let dialogItemsArray = props.dialogsPage.dialogsItems.map( d => <DialogsItem id ={d.id} name ={d.name} />)
    let messagesArray = props.dialogsPage.messages.map( m => <Message id ={m.id} message ={m.message}/>)
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
