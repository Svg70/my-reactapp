import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsContainer';






const Content = (props) => {
   
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer profilePage ={props.profilePage} dispatch = {props.dispatch}/>
            
        </div>
    )  
}
export default Content