import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsContainer';






const Content = (props) => {
   
    return (
        <div>
            <ProfileInfo photo={props.photo} fullName={props.fullName}/>
            <MyPostsContainer /*profilePage ={props.profilePage} dispatch = {props.dispatch}*//>
            
        </div>
    )  
}
export default Content