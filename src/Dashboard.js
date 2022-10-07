import React from 'react';
import Menu from "./Menu";
import {Outlet} from 'react-router-dom'


function Dashboard(props) {
    return (
        <div>
            <Menu />
            <Outlet />
        </div>
    );
}

export default Dashboard;