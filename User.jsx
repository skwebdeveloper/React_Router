import React from 'react';
import { useParams } from 'react-router-dom';
import './index.css'
import { useLocation, useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const User = (props) =>{
    const { username } = useParams();
    const location = useLocation();
    const History = useHistory();

    const hit = () =>{
        alert("Hye, Saurabh Kumar")  
    }         
return(
    <React.Fragment>
    <h1>Hi' {username}. {props.name} welcome you.</h1>
    <h2>That's my Current location: {location.pathname}</h2>
    {location.pathname === `/user/SaurabhKumar` ? 
    <button onClick={() => History.goBack()}>Go back</button>: null
    }
    </React.Fragment>
)
}

export default User;