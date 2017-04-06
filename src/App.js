import React from 'react';
import {
	HashRouter as Router,
	Route
} from 'react-router-dom';
import { RouteTransition, presets } from 'react-router-transition';
import Home from './components/home/Home'
import Resume from './components/resume/Resume'
const App = () => (
  <Router>
	  <div>
		  <RouteTransition pathname="" {...presets.slideRight}>
			  <Route path="/" component={Home}/>
		  </RouteTransition>
		  <Route path="/resume" component={Resume}/>
	  </div>
  </Router>
);


export default App;
