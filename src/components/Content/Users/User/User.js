import React from 'react'
import styles from './User.module.css'
import Girl from './../../../../assets/images/girl.png'
import anotherGirl from './../../../../assets/images/anotherGirl.png'
import {NavLink} from 'react-router-dom'


const User = (props)=>{
    return<div>
        <NavLink to={'/profile/' + props.e.id}><img className = {styles.userPhoto} 
        src ={(props.e.photos.small !== null)?props.e.photos.small:(props.e.name.length>=7)?Girl:anotherGirl}/></NavLink>
        
        {(props.e.followed ===false)?
        <button disabled={props.buttonActive.some(id => id ===props.e.id)} onClick ={() => {
            props.folowing(props.e.id)
           }}>Follow</button>:
        <button disabled={props.buttonActive.some(id => id ===props.e.id)} onClick ={() => { 
            props.unfolowing(props.e.id)
           }}>Unfollow</button>}
        <div>{props.e.name}</div>



        
        {/* <div>{props.e.location.country}</div>
        <div>{props.e.location.city}</div> */}
            
        
    </div>
}
export default User