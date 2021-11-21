import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom"

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this)
    this.showErrors = this.showErrors.bind(this)
    this.showLinks = this.showLinks.bind(this)
  }
  handleSubmit(e) {
    e.preventDefault();
    const activeUser = Object.assign({}, this.state);
    this.props.submitForm(activeUser);
  }
  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  showErrors() {
    return this.props.errors
  }
  showLinks() {
    if (this.props.formType === 'signup') {
      return (
      <div>
      <Link to='/login'>Log In</Link >
      </div>
      )
    } else {
      return <Link to='/signup'>Sign Up</Link >
    }
  }
  render() {
    console.log(this.props.currentUser)
    // if (this.props.currentUser !== undefined) {
    //   return <Redirect to='/' />
    // }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>THIS IS A FORM</h1>
          <br />
          <h1>{this.props.formType}</h1>
          {this.showErrors()}
          {this.showLinks()}
          <label>Username:
            <input
              type="text"
              value={this.state.username}
              onChange={this.update('username')}
            />
          </label>
          <br />
          <label>Password:
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
            />
          </label>
          <input type="submit" value={this.props.formType} />
        </form>
      </div >
    )
  }
}

export default SessionForm;