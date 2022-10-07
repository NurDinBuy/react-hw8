import React from 'react'
import './App.css';

import {Route, Routes} from "react-router-dom";

import Login from "./Login";
import MainPage from "./MainPage";
import AboutUsPage from "./AboutUsPage";
import ContactsPage from "./ContactsPage";
import Dashboard from "./Dashboard";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Dashboard />}>
                    <Route path='main' element={<MainPage/>}/>
                    <Route path='login' element={<Login/>}/>
                    <Route path={'about'} element={<AboutUsPage/>}/>
                    <Route path={'contact'} element={<ContactsPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
