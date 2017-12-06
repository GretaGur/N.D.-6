import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Login extends Component {
  state = { userName: "", password: "" };

  setUsername(e) {
    this.setState({ userName: e.target.value });
  }

  setPassword(e) {
    this.setState({ password: e.target.value });
  }
  setUsernameToLocalStorage() {
    localStorage.setItem('userName', this.state.userName);
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.getUsername(this.state.userName);
    this.setUsernameToLocalStorage();
  }
  render() {
    return (
      <div>
        <form>
          <div>
            <label>
              <b>Username</b>
            </label>
            <input onChange={this.setUsername.bind(this)} />
            <br />
            <label>
              <b>Password</b>
            </label>
            <input type="password" onChange={this.setPassword.bind(this)} />
            <br />
            <div onClick={this.onSubmit.bind(this)}> <Link to={"/homepage"} >Login</Link></div>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
