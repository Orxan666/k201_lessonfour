import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
const Header = () => {
  return <header className="header">
    <div className="boxes">
        <div className="logo">
            <Link to={'/'}>
            <h1>LOGO</h1>

            </Link>
        </div>
        <div className="nav-menu">
            <ul>
                <li>
                    <Link to={'/'}>HOME</Link>
                </li>
                <li>
                    <Link to={'/contact'}>CONTACT</Link>
                </li>
            </ul>
        </div>
    </div>
  </header>;
};

export default Header;
