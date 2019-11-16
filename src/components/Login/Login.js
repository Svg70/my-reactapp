import React from 'react'
import {reduxForm, Field} from 'redux-form'


const LoginForm = (props) => {
    const { handleSubmit } = props
    return<div>
        <form onSubmit={handleSubmit}>
        <div>
            <Field name ={'login'} placeholder={"Login"} component={'input'} />
        </div>
        <div>
            <Field name ={'password'} placeholder={"Password"} component={'input'}/>
        </div>
        <div>
            <Field name ={'remMe'} input component={'input'} type={"checkbox"} />remember me
    </div>
        <div>
            <button>Login</button>
        </div>
    </form>
    </div>
}

const LoginReduxForm = reduxForm({
    form: 'login'
  })(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) =>{
        console.log(formData)
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit = {onSubmit}/>
    </div>
}
export default Login