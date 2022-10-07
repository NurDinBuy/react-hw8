import React from 'react';
import {Link} from "react-router-dom";

function Menu(props) {
    return (
        <div>
            <Link to={'/main'}>main page</Link>
            <Link to={'/login'}>login page</Link>
            <Link to={'/about'}>about us page</Link>
            <Link to={'/contact'}>contacts page</Link>
        </div>
    );
}

export default Menu;