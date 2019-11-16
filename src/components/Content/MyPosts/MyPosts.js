import React from 'react'
import styles from './MyPosts.module.css'
import Post from '../Post/Post'
import {reduxForm, Field} from 'redux-form'

const MyPosts = (props) => {
    // let newPostRef = React.createRef()
    let addPost = (value) =>{
        props.addPost(value.newPostBody)
    }

    // let onTextAreaChange = () => {
    //     let newText = newPostRef.current.value
    //     props.onTextAreaChange(newText)
    // }



    let postsArray = props.profilePage.posts.map(p => 
    <Post name = {p.name} id ={p.id} like = {p.like} postText ={p.postText}/>)
    return <div>
        <div>Мои посты</div>
            <PostReduxForm onSubmit={addPost}/>
            {postsArray}
    </div>
}


const AddPostForm = (props) =>{
    return(
        <form onSubmit={props.handleSubmit}>
        <div>
                    <Field component = "textarea" name="newPostBody"
                    placeholder ="Enter your post"
                    />
                    <button>SendPost!</button>

                </div>
        </form>
     )
}

const PostReduxForm = reduxForm({
    form: 'dialogAddMessageForm'
  })(AddPostForm)


export default MyPosts