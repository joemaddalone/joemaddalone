import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CharSpinner from './CharSpinner';
import Controls from './Controls';
import Elsewhere from './Elsewhere';

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
		<div className="vh-100 vw-100 center flex flex-column justify-center items-center">
			<div className="tiles"><CharSpinners str={str.txt} color={str.color} /></div>
			<Controls setStr={setStr} str={str.txt} color={str.color} />
			<Elsewhere />
		</div>
	);
};

export default Home;
