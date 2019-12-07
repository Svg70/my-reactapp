import { authAPI  } from "../api/api"
import { connect } from "react-redux"
import {stopSubmit} from 'redux-form'

let initialstate = {
    id: null,
    login: null,
    email: null,
    
    isAuth: false
}


let headerReducer = (state = initialstate, action) => {

    switch (action.type) {
        case ('SET_AUTH'): {
            return {
                ...state,
                ...action.payload
                 }
        }
        default:

            return state
    }
}


export const setAuth = (userId, login, email, isAuth) => {
    return { type: 'SET_AUTH', payload:{userId, login, email, isAuth} }
}

export const authentificationThunkCreator = () => (dispatch) => {

    authAPI.auth()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {email, id, login} = response.data.data
                    dispatch(setAuth(id, login, email, true))
                }
            }
        )
}

export const login = (email,password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(authentificationThunkCreator())
                }else{
                    let message = response.data.messages.length> 0? response.data.messages[0]: "Some error"
                        dispatch(stopSubmit("login", {_error: message}))
                }
            }
        )
}

export const logout = () => (dispatch) => {
    authAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuth(null,null, null, false))
                }
            }
        )
}


export default headerReducer
