import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import Google from './Google';
// import Contextapi from './Contextapi'
// import Buttoncontext from './ClickContext'
// import Pokemon from './Pokemon'
import { BrowserRouter} from 'react-router-dom';
// import Router from './Router'
import Navbar from './Navbar'




// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Testing />, document.getElementById('root'));
// ReactDOM.render(<Google />, document.getElementById('root'));
// ReactDOM.render(<Contextapi />, document.getElementById('root'));
// ReactDOM.render(<Buttoncontext />, document.getElementById('root'));
// ReactDOM.render(
// <BrowserRouter>
// <Router />
// </BrowserRouter>, document.getElementById('root'));


ReactDOM.render(
    <BrowserRouter>
    <Navbar />
    </BrowserRouter>
    ,document.getElementById('root'))