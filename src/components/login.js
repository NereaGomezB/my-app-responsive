
import React from 'react';
import { Form, Button } from "react-bootstrap";

class Login extends React.Component {
    constructor() {
    super();
    this.state = {
      input: {},
      errors: {}
    };
     
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
     
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
  
    this.setState({ input });
  }
     
  handleSubmit(event) {
    event.preventDefault();
  
    if(this.validate()){
        let input = {};
        input["username"] = "";
        input["password"] = "";
        this.setState({input:input});
    }
  }
  
  validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;
   
      if (!input["username"]) {
        isValid = false;
        errors["username"] = "Please enter your username.";
      }
  
      if (typeof input["username"] !== "undefined") {
        const re = /^\S*$/;
        if(input["username"].length < 6 || !re.test(input["username"])){
            isValid = false;
            errors["username"] = "Please enter valid username.";
        }
      }
  
      if (!input["password"]) {
        isValid = false;
        errors["password"] = "Please enter your password.";
      }
  
      if (typeof input["password"] !== "undefined") {
        if(input["password"].length < 6){
            isValid = false;
            errors["password"] = "Please add at least 6 charachter.";
        }
      }
    
      this.setState({ errors: errors });
  
      return isValid;
  }
     
  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input 
              type="text" 
              name="username" 
              value={this.state.input.username}
              onChange={this.handleChange}
              className="form-control" 
              id="username" />
              <div className="text-danger">{this.state.errors.username}</div>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              name="password" 
              value={this.state.input.password}
              onChange={this.handleChange}
              className="form-control" 
              id="password" />
              <div className="text-danger">{this.state.errors.password}</div>
          </div>
          <Button block size="lg" type="submit">
          Sign in
        </Button>
        </Form>
      </>
    );
  }
}
  
export default Login;