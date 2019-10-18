import React from 'react'
import styles from './User.module.css'



const User = (props)=>{
    let unfollow =() =>{
        debugger
        props.unfollow(props.e.id)
    }
    let follow =() =>{
        props.follow(props.e.id)
    }
    return<div>
        <img className = {styles.userPhoto} src ={props.e.photoUrl}/>
        {(props.e.followed ===true)?<button onClick ={follow}>Follow</button>:<button onClick ={unfollow}>Unfollow</button>}
        <div>{props.e.name}</div>
        <div>{props.e.location.country}</div>
        <div>{props.e.location.city}</div>
            
        
    </div>
}
export default User