import React from 'react';
import {useNavigate} from "react-router-dom";

function Login(props) {

    const navigate = useNavigate()

    const goToMain = setTimeout(() => {
        navigate('/main')
    }, 3000)

    return (
        <div>
            <input type="text" placeholder='login'/>
            <input type="text" placeholder='password'/>
            <button onClick={goToMain}>Log In</button>
        </div>
    );
}

export default Login;