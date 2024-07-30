import React from 'react';
import './header.css';
import holberton_logo from '../holberton-logo.jpg';

function Header() {
    return (
        <div className="App-header">
        <img src={holberton_logo} alt="logo" />
        <h1>School dashboard</h1>
        </div>
    );
    }

    export default Header;