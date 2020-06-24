import React, { useState } from 'react';
import './index'

import { NavLink } from 'react-router-dom';

const Menu = () =>{
let time = new Date().toLocaleTimeString()
const [ ctime, setstate ] = useState(time)
const updated = () =>{
    let time = new Date().toLocaleTimeString()
    setstate(time)
}

setInterval(updated, 1000)



return(
    <React.Fragment>
    {/* <header> */}
    <div className="menu_Style">
    {/* <h2 style={{ color:"white" }}>Web</h2> */}
     <NavLink className="bar" exact activeClassName="active_class" to="/">About</NavLink>
     <NavLink className="bar" exact activeClassName="active_class" to="/contact">Contact</NavLink>
     <NavLink className="bar" exact activeClassName="active_class" to="/work">Work</NavLink>
     <NavLink className="bar" exact activeClassName="active_class" to="/user/User">User</NavLink>
     <NavLink  className="bar" exact activeClassName="active_class" to="/search">Search</NavLink>
     <NavLink className="bar" exact activeClassName="active_class" to="/user/User">{ctime}</NavLink> 
    </div>
    {/* </header> */}

    </React.Fragment>
)
}

export default Menu;