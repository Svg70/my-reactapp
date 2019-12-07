import React from 'react'
import {reduxForm, Field} from 'redux-form'
import { Input } from '../../common/formControlls'
import { required } from '../../utils/validator'
import {login,logout} from '../../redux/header-reducer'
import {connect} from 'react-redux'
import {Redirect} from "react-router-dom";
import styles from './../../common/formControlls.module.css'


const LoginForm = (props) => {
    const { handleSubmit } = props
    return<div>
        <form onSubmit={handleSubmit}>
        <div>
            <Field name ={'email'} 
            validate ={[required]}
            placeholder={"Email"} component={Input} />
        </div>
        <div>
            <Field name ={'password'} 
            
            validate ={[required]}
            placeholder={"Password"} component={Input}/>
        </div>
        <div>
            <Field name ={'rememberMe'} input component={'input'} type={"checkbox"} />remember me
    </div>
    {props.error &&
    <div className ={styles.formSummaryError}>{props.error}</div>
    }
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
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth){
        return <Redirect to={"/profile"}/>
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit = {onSubmit}/>
    </div>
}

const mapStateToProps = (state) =>{
    return {isAuth: state.auth.isAuth }
}

export default connect(mapStateToProps, {login, logout})(Login)