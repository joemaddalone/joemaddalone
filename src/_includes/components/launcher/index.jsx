import React from 'react';
import { Svg, Rect, Text, MarkerTriangle } from 'react-svg-path';
import Social from './Social';
import Links from './Links';
import icons from './icons';
import './launcher.css';

const socialLinks = [
	// {
	// 	id: 'twitter',
	// 	txt: 'Twitter',
	// 	msg: 'I tweet now and then.',
	// 	icon: icons.twitter,
	// 	url: 'http://www.twitter.com/joemaddalone',
	// 	type: 'external',
	// 	color: '#0084b4',
	// },
	{
		id: 'github',
		txt: 'Github',
		msg: 'I build and share.',
		icon: icons.github,
		url: 'http://www.github.com/joemaddalone',
		type: 'external',
		color: '#333',
	},
	{
		id: 'linkedin',
		txt: 'LinkedIn',
		msg: 'I lead and grow.',
		icon: icons.linkedin,
		url: 'http://www.linkedin.com/in/joemaddalone',
		type: 'external',
		color: '#0077b5',
	},
	{
		id: 'youtube',
		txt: 'YouTube',
		msg: 'I learn and teach.',
		icon: icons.youtube,
		url: 'http://www.youtube.com/joemaddalone',
		type: 'external',
		color: '#ff0000',
	},
];

function Launcher() {
	const initBgc = '#eee';
	const size = {
		width: 400,
		height: 150,
	};

	return (
		<div className="launcher">
			<Svg width={size.width} height={size.height}>
				<defs>
					{socialLinks.map((control) => {
						return <path id={control.id} key={control.id} d={control.icon} className="icon" />;
					})}
				</defs>
				<MarkerTriangle id="marker-explain-start" size={10} color="#999" />
				<Rect width={size.width} height={size.height} fill={initBgc} className="container">
					<Text ox={12} oy={-50} className="big middle">
						Hi, I'm Joe Maddalone
					</Text>
					<Social oy={0} controls={socialLinks} />
				</Rect>
			</Svg>
			<h2 style={{fontFamily: 'monospace'}}>other stuff</h2>
			<Links />
		</div>
	);
}

export default Launcher;
