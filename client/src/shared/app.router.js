import React from 'react'

import CreateContact from '../createContact';
import DisplayContact from '../displayContact';
import Edit from '../editContact';


import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';



export default function AppRouter() {
    return(
        <>
        
           
        
               
  <Switch>
    <Route exact path="/create" component={CreateContact} />
    <Route exact path="/edit/:id" component={Edit}/>
    
    <Route exact path="/" component={DisplayContact} />
    
    {/* <Route exact path="/signup" component={SignUp} /> */}
  </Switch>
  

        </>
    )
    
}
