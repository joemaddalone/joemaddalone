import React from "react";
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './Home/Home';
import Resume from './Resume/Resume';

// const t = translate(["common"]);
const App = () => {
	 return (
		<Router>
			<div>
				<Route exact path="/" component={Home}></Route>
				<Route path="/resume" component={Resume}></Route>
			</div>
		</Router>
	 );
};

export default App;
