import React, { Component } from 'react'
import logo from '../Logotipo.svg';
import Login from "../components/login";

class nav extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      isOpened: false,
    };
    this.toggleSigninMobile = this.toggleSigninMobile.bind(this);
}

openNav() {
  document.getElementById("myNav").style.width = "100%";
}

closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

toggleSigninMobile() {
  this.setState({
    isOpened: !this.state.isOpened
  })
}

  render(){

    return (
      <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          <img alt="logo-header" src={logo} className="d-inline-block align-top"/>
        </a>
        <ul className="navbar-nav ml-auto d-none d-sm-block">
          <a href="/signin" className="custom-link font-weight-bold">Sign in</a>
        </ul>
        
      {/* Mobile navbar */}
        <div className="d-md-none">
          <span className="menu-icon" onClick={this.openNav}>
            <i className="fa fa-bars white-bars" aria-hidden="true"></i>
          </span>
        </div>
        
        <div id="myNav" className="overlay">
          <span className="closebtn" onClick={this.closeNav}>
            <i className="fa fa-close" aria-hidden="true"></i>
          </span>
          <div className="overlay-content">
            <a href="#products" className="link-option">Products</a>
            <a href="#aboutus" className="link-option">About us</a>
            <a href="#contact" className="link-option">Contact</a>
          </div>

          <div id="test" className="absolute-signin-mobile p-3">
           <div onClick={this.toggleSigninMobile} data-target=".show-footer" data-toggle="collapse" className="custom-link font-weight-bold" type="button" id="footer_btn">
             Sign in
             {this.state.isOpened
                 ? <i className="fa fa-chevron-down float-right" aria-hidden="true"></i>
                 : <i className="fa fa-chevron-up float-right" aria-hidden="true"></i>
             }
           </div>
           <div className="nav-collapse collapse show-footer" id="footer_body">
             <div className="custom-height">
              <Login/>
            </div>
          </div>
        </div>
        
      </div>
       {/* End Mobile navbar */}
       
      </nav>
  
      </>
    )};
  }
  export default nav;