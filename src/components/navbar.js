import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/" className="navbar-brand"><b>Xmeme</b></Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">View Memes</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create Meme</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}