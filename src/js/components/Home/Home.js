import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CharSpinner from './CharSpinner';
import Controls from './Controls';
import Elsewhere from './Elsewhere';
import './Home.css';

const CharSpinners = ({ str, color }) => (
	<div className="spinners-holder">{str.split('').map((char, i) => <CharSpinner key={i} char={char} color={color} />)}</div>
);

CharSpinners.propTypes = {
	str: PropTypes.string,
	color: PropTypes.string
};

const Home = () => {
	const [str, setStr] = useState({txt: "Hi, I'm Joe", color: '#222'});
	return (
		<div className="home">
			<div className="tiles"><CharSpinners str={str.txt} color={str.color} /></div>
			<Controls setStr={setStr} str={str.txt} color={str.color} />
			<Elsewhere />
		</div>
	);
};

export default Home;
