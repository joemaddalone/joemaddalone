import React from 'react';
import Control from './Control';
import twitter from '../../icon/icon-twitter.svg';
import github from '../../icon/icon-github.svg';
import linkedin from '../../icon/icon-linkedin.svg';
import youtube from '../../icon/icon-youtube.svg';
import cv from '../../icon/icon-cv.svg';

const Controls = (props) => {
	let controls = [
		{ txt: 'Twitter', icon: twitter, url: "http://www.twitter.com/joemaddalone", type: 'external' },
		{ txt: 'Github', icon: github, url: 'http://www.github.com/joemaddalone', type: 'external' },
		{ txt: 'LinkedIn', icon: linkedin, url: 'http://www.linkedin.com/in/joemaddalone', type: 'external' },
		{ txt: 'YouTube', icon: youtube, url: 'http://www.youtube.com/joemaddalone', type: 'external' },
		{ txt: 'My Resume', icon: cv, url: '/#/resume', type: 'internal' }
	];
	return (
		<div className="tile-controls">
			{controls.map((control, i) => <Control url={control.url} key={i} m={props.m} txt={control.txt}
				icon={control.icon} />)}
		</div>
	);
};

export default Controls;