import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <div className="nav_bar">
            <ul className="nav_main">
                <li><Link to="/">reducers</Link></li>
                <li><Link to="/extraReducers">extraReducers</Link></li>
                <li><Link to="/reselect">Reselect</Link></li>

            </ul>
        </div>
    );
}

export default Navigation;
