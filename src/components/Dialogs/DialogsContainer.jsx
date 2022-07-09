import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect.js';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../Redux/reducer-dialogs.js';
import Dialogs from './Dialogs';



let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
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

let AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps) (AuthRedirectComponent)

export default DialogsContainer;