import React from 'react'
import Dialogs from './Dialogs'
import { onMessageTextAreaChangeAC, addMessageAC } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthPedirect';
import { compose } from 'redux';

// let AuthRedirectComponent = withAuthRedirect(Dialogs)
const mapStateToProps = (store) =>{
    return{dialogsPage: store.dialogsPage}
}
const mapDispatchToProps = (dispatch) =>{
    
    return{
        // onMessageTextAreaChange:(newMessage) =>{
        //     dispatch(onMessageTextAreaChangeAC(newMessage))
        // },
        addMessage:(value) =>{
            dispatch(addMessageAC(value))
        }
    }
}

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)