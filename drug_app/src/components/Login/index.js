import React, { Component } from 'react';
import { MdAccountBox, MdLockOutline, MdAccountCircle } from 'react-icons/md';
import { Container, Button, Input } from './styles';

export default class Login extends Component {
  render() {
    return(
        <Container>

          <span><MdAccountCircle size={150} color="black"/></span>

            <div className="icon__input">
              <MdAccountBox size={25} color="black"  id="icon" />
              <Input type="text" placeholder="USERNAME" name="username"/>
            </div>
           

            <div className="icon__input">
              <MdLockOutline size={25} color="black" id="icon"/>
              <Input type="password" placeholder="PASSWORD" name="password"/>
            </div>

          <Button>Submit</Button>

          <div className="last-inputid">
            <input type="checkbox" className="checkbox_input"/>
            <span id="span_input">Remember me</span>
          </div>  

          <div className="forgot_pass">
            <span id="span_forgot"><a href="/">Forgot your password?</a></span>
          </div>
           
        </Container>
    );
  }
}
