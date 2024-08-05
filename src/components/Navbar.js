import React from 'react';
import '../App.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">FLAT-DAGO</div>
      <ul className="navbar-nav">
        <li className="nav-item"><a href="#home">Home</a></li>
        <li className="nav-item"><a href="#transactions">Transactions</a></li>
        <li className="nav-item"><a href="#about">About</a></li>
        <li className="nav-item"><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
