import { authAPI  } from "../api/api"

let initialstate = {
    id: null,
    email: null,
    login: null,
    authStatus: false
}


let headerReducer = (state = initialstate, action) => {

    switch (action.type) {
        case ('SET_AUTH'): {
            debugger
            return {
                ...state, id: action.data.data.id, email: action.data.data.email,
                login: action.data.data.login, authStatus: true
            }
        }
        default:

            return state
    }
}


export const setAuth = (data) => {
    return { type: 'SET_AUTH', data }
}

export const authentificationThunkCreator = () => (dispatch) => {
    authAPI.auth()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuth(response.data))
                }
            }
        )
}



export default headerReducer
