import React from 'react'
import styles from './User.module.css'
import Girl from './../../../../assets/images/girl.png'
import anotherGirl from './../../../../assets/images/anotherGirl.png'


const User = (props)=>{
    let unfollow =() =>{
        
        props.unfollow(props.e.id)
    }
    let follow =() =>{
        props.follow(props.e.id)
    }
    return<div>
        <img className = {styles.userPhoto} 
        src ={(props.e.photos.small !== null)?props.e.photos.small:(props.e.name.length>=7)?Girl:anotherGirl}/>
        {(props.e.followed ===true)?<button onClick ={follow}>Follow</button>:<button onClick ={unfollow}>Unfollow</button>}
        <div>{props.e.name}</div>
        {/* <div>{props.e.location.country}</div>
        <div>{props.e.location.city}</div> */}
            
        
    </div>
}
export default User