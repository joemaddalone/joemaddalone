import React from 'react';
import '../../css/joemaddalone.css';
import './home.css';
import { Link } from 'react-router-dom';
import CharSpinner from './CharSpinner';
import Elsewhere from './Elsewhere';
import mobileCheck from '../../utility/mobilecheck';
import Controls from './Controls';

const CharSpinners = ({ str }) => (
	<div className="spinners-holder">{str.split('').map((char, i) => <CharSpinner key={i} char={char} />)}</div>
);
class Home extends React.Component {
	constructor() {
		super();
		this.state = { stdOut: 'Hi, I\'m Joe' };
	}

	setString(s) {
		this.setState({ stdOut: s });
	}

	render() {
		return (
			<div className="home">
				{!mobileCheck()
					? <div className="tiles"><CharSpinners str={this.state.stdOut} /></div>
					: <h1 className="mobile-h1">Hi, I'm Joe</h1>}
				<Controls m={this.setString.bind(this)} />
				<Elsewhere />
			</div>
		);
	}
}
export default Home;