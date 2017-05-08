import React from 'react';
import {
	HashRouter as Router,
	Route
} from 'react-router-dom';
import Home from './components/home/Home'
import Resume from './components/resume/Resume'
const App = () => (
  <Router>
	  <div>
		  <Route exact path="/" component={Home}/>
		  <Route path="/resume" component={Resume}/>
	  </div>
  </Router>
);
export default App