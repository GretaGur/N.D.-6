import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import Button from 'material-ui/Button';


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
    if (this.formValid()) {
      this.props.getUsername(this.state.userName);
      this.setUsernameToLocalStorage();
      // history.push('/home');
    }
  }
  formValid() {
    let valid = true;
    let username = document.getElementById('username');
    let password = document.getElementById('password');
    if (username.value) {
      username.style.background = "none";
    } else {
      username.style.background = "rgba(204, 0, 0, 0.2)";
      valid = false;
    }
    if (password.value) {
      password.style.background = "none";
    } else {
      password.style.background = "rgba(204, 0, 0, 0.2)";
      valid = false;
    }
    return valid;
  }


  render() {
    return (
      <div>
        <form>
          <div>
            <FormControl>
              <InputLabel htmlFor={"username"}>
                <b>Username</b>
              </InputLabel>
              <Input id={"username"} name={"username"} onChange={this.setUsername.bind(this)} />
            </FormControl>
            <br />
            <FormControl>
              <InputLabel htmlFor={"password"}>
                <b>Password</b>
              </InputLabel>
              <Input id={"password"} name={"password"} onChange={this.setPassword.bind(this)} />
            </FormControl>
            <br />
            <Button onClick={this.onSubmit.bind(this)}><Link to={"/homepage"} >Login</Link></Button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
