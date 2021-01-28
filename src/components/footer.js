import React, { Component } from 'react'
import logo from '../Logotipo.svg';

class footer extends Component {

render(){

  return (
    <>
      <footer className="bg-dark text-lg-start mt-2 fixed-bottom custom-footer">
        <div className="p-4">
          <img
              alt="logo-footer"
              src={logo}
              className="d-inline-block align-top"
          />
        </div>
      </footer>
    </>
  )};
}

export default footer;