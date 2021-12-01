import React from 'react';
import { Svg, Rect, Text, MarkerTriangle } from 'react-svg-path';
import Social from './Social';
import Transition from './Transition';
import Atom from './Atom';
import Links from './Links';
import useWindowSize from './useWindowSize';
import icons from './icons';
import './launcher.css';

const socialLinks = [
	{
		id: 'twitter',
		txt: 'Twitter',
		msg: 'I tweet now and then.',
		icon: icons.twitter,
		url: 'http://www.twitter.com/joemaddalone',
		type: 'external',
		color: '#0084b4',
	},
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
	const [transition, setTransition] = React.useState(null);
	const [showLoader, setShowLoader] = React.useState(false);
	const size = useWindowSize();
	const minHeight = 350;
	const height = Math.max(size.height, minHeight);

	React.useEffect(() => {
		if (showLoader) {
			setTimeout(() => {
				window.location.href = transition.url;
			}, 400);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [showLoader]);

	React.useEffect(() => {
		if (transition) {
			setTransition(false);
		}
		if (showLoader) {
			setShowLoader(false);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="launcher" style={{ minHeight }}>
			<Svg width={size.width} height={height} scale style={{ minHeight }}>
				<defs>
					{socialLinks.map((control) => {
						return <path id={control.id} key={control.id} d={control.icon} className="icon" />;
					})}
				</defs>
				<MarkerTriangle id="marker-explain-start" size={10} color="#999" />
				<Rect width={size.width} height={height} fill={initBgc} className="container">
					<Text ox={12} oy={-150} className="big middle">
						Hi, I'm Joe Maddalone
					</Text>
					<Social oy={-100} controls={socialLinks} transition={setTransition} />
					<Text fill="#999" oy={0} className="medium middle">
						other stuff
					</Text>

					<Links oy={30} transition={setTransition} />
					{transition ? (
						<Transition width={size.width} color={transition.color} completed={() => setShowLoader(true)} />
					) : null}

					{showLoader ? <Atom color={transition.color} /> : null}
				</Rect>
			</Svg>
		</div>
	);
}

export default Launcher;
