import React from 'react'
import Dialogs from './Dialogs'
import { onMessageTextAreaChangeAC, addMessageAC } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthPedirect';
import { compose } from 'redux';


const mapStateToProps = (store) => {
    return { dialogsPage: store.dialogsPage }
}
const mapDispatchToProps = (dispatch) => {

    return {

        addMessage: (value) => {
            dispatch(addMessageAC(value))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)