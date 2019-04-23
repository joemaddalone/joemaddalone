import React from "react";
import PropTypes from 'prop-types';
import { useSpring, animated, config } from "react-spring";
import "./CharSpinner.css";

const CharSpinner = ({ char, color }) => {
	const chars = "',abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.".split(
		""
	);
	const top = useSpring({
		top: chars.indexOf(char) * 55 * -1,
		from: { top: 0 },
		config: config.wobbly,
	});

	return (
		<div className="tile">
			<animated.div style={top} className="char-holder">
				{chars.map(c => {
					const active = c === char;
					const tileClass = `tile-char ${active ? 'active' : ''}`;
					const style = active ? {color} : {};
					return (
						<div style={style} key={c} className={tileClass}>
							{c}
						</div>
					);
				})}
			</animated.div>
		</div>
	);
};

CharSpinner.propTypes = {
	char: PropTypes.string,
	color: PropTypes.string
};

export default CharSpinner;
