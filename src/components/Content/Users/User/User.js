import React from 'react'
import styles from './User.module.css'
import Girl from './../../../../assets/images/girl.png'
import anotherGirl from './../../../../assets/images/anotherGirl.png'
import {NavLink} from 'react-router-dom'
import * as axios from 'axios'

const User = (props)=>{
    let unfollow =() =>{
        
        props.unfollow(props.e.id)
    }
    let follow =() =>{
        
        props.follow(props.e.id)
    }
    return<div>
        <NavLink to={'/profile/' + props.e.id}><img className = {styles.userPhoto} 
        src ={(props.e.photos.small !== null)?props.e.photos.small:(props.e.name.length>=7)?Girl:anotherGirl}/></NavLink>
        
        {(props.e.followed ===false)?
        <button disabled={(props.buttonActive) ? '' :  true} onClick ={() => { 
            props.buttonFalse()
            axios.post(`https://social-network.samuraijs.com/api/1.0//follow/${props.e.id}`, {},
            {
                withCredentials: true,
                headers: {
                    "API-KEY": "9d0128a1-0ef1-4a32-b120-4b30a2b557a3"
                }
            })
            .then(response => {  
                
                if (response.data.resultCode == 0){
                follow()}
                    props.buttonFalse()
            })
            
            
           }}>
            
            
            
            Follow</button>:
        <button disabled={(props.buttonActive) ? '' :  true} onClick ={() => { debugger
            props.buttonFalse()
            axios.delete(`https://social-network.samuraijs.com/api/1.0//follow/${props.e.id}`,
            {
                withCredentials: true,
                headers: {
                    "API-KEY": "9d0128a1-0ef1-4a32-b120-4b30a2b557a3"
                }
            })
            .then(response => {  
                
                if (response.data.resultCode == 0){
                unfollow()}
                    props.buttonFalse()
            })
            
            
           }}>Unfollow</button>}
        <div>{props.e.name}</div>



        
        {/* <div>{props.e.location.country}</div>
        <div>{props.e.location.city}</div> */}
            
        
    </div>
}
export default User