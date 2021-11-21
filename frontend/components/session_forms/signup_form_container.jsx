import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import SessionForm from "./sessions_form";

const mapStateToProps = (state) => {
  console.log('signup')
  return {
    errors: state.sessions.errors,
    formType: 'signup',
    currentUser: state.entities.users[state.sessions.currentUser]
  }

}

const mapDispatchtoProps = (dispatch) => {
  return {
    submitForm: (user) => dispatch(signup(user))
  };
}

export default connect(mapStateToProps, mapDispatchtoProps)(SessionForm)