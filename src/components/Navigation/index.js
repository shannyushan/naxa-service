import React, { useState } from "react";
import Logo from "./../../assets/logo.png";

function Navigation() {
  const [issmallNav, setIssmallNav] = useState(false);
  return (
    <div className="nav-bar">
      <nav className="container flex-row space-between">
        <img src={Logo} alt="Naxa Logo" width="120px" height="35px" />
        <div className="ham-menu" onClick={(e) => setIssmallNav(!issmallNav)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </div>
        <ul className="flex-row space-evenly navigation">
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
        <button className="btn-primary flex flex-row btnLetsTalk">
          Let's talk<span className="hidden">{" ->"}</span>
        </button>
      </nav>
      {issmallNav && (
        <div className="small-Nav">
          <div className="topCross flex" onClick={(e)=> setIssmallNav(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
              />
              <path
                fill-rule="evenodd"
                d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
              />
            </svg>
          </div>
          <ul className="flex-column">
            <li className="flex" style={{ width: "100%" }}>
              <a href="#">Services</a>
            </li>
            <li as="li" style={{ width: "100%" }}>
              <a href="#">Portfolio</a>
            </li>
            <li as="li" style={{ width: "100%" }}>
              <a href="#">Company</a>
            </li>
            <li as="li" style={{ width: "100%" }}>
              <a href="#">{"Events & Media"}</a>
            </li>
            <li as="li" style={{ width: "100%" }}>
              <a href="#">Blogs</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navigation;
