import React, { Component } from 'react';

import { Link } from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
            <ul className="nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Favorites">Favorites</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Popular">Popular</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/PopularBattle">Popular battle</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Weekly">Weekly</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/WeeklyBattle">Weekly battle</Link>
                </li>
            </ul>
        );
    }
}

export default Nav;