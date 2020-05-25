import React from 'react';

import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';

import Layout from './shared/layout';



import Loadable from "react-loadable";
import Loading from "./shared/loading";





function App() {
  return (
<Router>
  <Switch>
  
  
  
  <Route  path="/" component={Layout}/>
    
    
  </Switch>
</Router>
  );
}

export default App;
