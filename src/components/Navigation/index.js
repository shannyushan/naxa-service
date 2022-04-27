import React from 'react'
import Logo from "./../../assets/logo.png";

function Navigation() {
  return (
    <nav className="container nav-bar flex-row space-between w100">
        <img src={Logo} alt="Naxa Logo" width="120px" height="35px" />
        <ul className="navigation flex-row space-evenly">
          <li className="flex">
            <a href="#">Services</a>
          </li>
          <li as="li">
            <a href="#">Portfolio</a>
          </li>
          <li as="li">
            <a href="#">Company</a>
          </li>
          <li as="li">
            <a href="#">{"Events & Media"}</a>
          </li>
          <li as="li">
            <a href="#">Blogs</a>
          </li>
        </ul>
        <button className="btn-primary flex flex-row btnLetsTalk">Let's talk<span className="hidden">{" ->"}</span></button>
      </nav>
  )
}

export default Navigation