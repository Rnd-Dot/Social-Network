import { connect } from 'react-redux';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../Redux/reducer-dialogs.js';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }  
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        onMessage: (text) => {
            dispatch(updateNewMessageTextActionCreator(text))
        }
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps) (Dialogs)

export default DialogsContainer;