import React from "react";
import PropTypes from "prop-types";
import Control from './Control';
import icons from '../icons';


const Controls = ({ setStr, str }) => {
	const controls = [
		{
			txt: "Twitter",
			icon: icons.twitter,
			url: "http://www.twitter.com/joemaddalone",
			type: "external",
			color: '#0084b4'
		},
		{
			txt: "Github",
			icon: icons.github,
			url: "http://www.github.com/joemaddalone",
			type: "external",
			color: '#333'
		},
		{
			txt: "LinkedIn",
			icon: icons.linkedin,
			url: "http://www.linkedin.com/in/joemaddalone",
			type: "external",
			color: '#0077b5'
		},
		{
			txt: "YouTube",
			icon: icons.youtube,
			url: "http://www.youtube.com/joemaddalone",
			type: "external",
			color: '#ff0000'
		},
		 { txt: "My Resume", icon: icons.resume, url: "/resume", type: "internal", color: "#C60F7B" }
	];

	

	return (
		<div className="controls">
			{controls.map(control => (
				<Control active={control.txt === str} key={control.icon} control={control} setStr={setStr} />
			))}
		</div>
	);
};

Controls.propTypes = {
	setStr: PropTypes.func,
	str: PropTypes.string
};

export default Controls;
