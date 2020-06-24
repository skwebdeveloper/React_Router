import React from 'react';
import About from './About'
import Contact from './Contact'
import Menu from './Menu'
import Work from './Work'
import User from './User'
import Search from './Search'
import { Route, Switch } from 'react-router-dom';
import './index'


const Navbar = () =>{
return(
    <React.Fragment>
    <Menu />
    <Switch>
    {/* <Route exact path="/" component={About} /> */}
    <Route exact path="/" component= {() => <About name="About" />}/>
    <Route path="/contact" component={() => <Contact name="Contact" />}/>
    <Route exact path="/work" component={() => <Work name="Work" />}/>
    <Route exact path="/search" component={() => <Search name="Search" />}/>
    <Route path="/user/:username" component={() => <User name="Saurabh Kumar" />}/>
    </Switch>
    </React.Fragment>
)
}

export default Navbar;