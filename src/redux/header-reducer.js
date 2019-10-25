let initialstate = {
    id: null,
    email: null,
    login: null,
    authStatus: false
}


let headerReducer = (state = initialstate, action) => {

    switch (action.type) {
        case ('SET_AUTH'):{
            
            return {...state, id: action.data.data.id, email: action.data.data.email,
            login: action.data.data.login, authStatus: true}
        }
        default:
            
                return state    
    }
}


export const setAuthAC = (data) => {
    return { type: 'SET_AUTH', data}
}

export default headerReducer
