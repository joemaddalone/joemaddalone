import React from 'react';
import PropTypes from 'prop-types';
import Path, { Circle, Group, Rect } from 'react-svg-path';

const Atom = ({ color, cx, cy, shells = [4, 8, 16, 32, 64], circ = 180 }) => {
	const step = circ / shells.length;
	const electron_config = shells.slice().reverse();
	const incrementalRing = electron_config.map((s, i) => circ - step * i);
	const shellPoints = electron_config.map((s, i) => Path.radialPoints(incrementalRing[i] / 2, cx, cy, s));

	const getTimes = (arr) => {
		const max = 5000;
		let min;
		return arr.map((n) => {
			min = Math.max(n * 1000, max);
			return Math.floor(Math.random() * (max - min)) + min;
		});
	};

	const times = getTimes(electron_config);

	const cls = () => {
		const items = ['ring', '_ring'];
		return items[Math.floor(Math.random() * items.length)];
	};

	return (
		<Rect width={circ} height={circ} cx={cx} cy={cy} className="atom">
			{incrementalRing.map((s, i) => (
				<Group key={i} className={cls()} style={{ animationDuration: `${times[i] / 1500}s` }}>
					<Circle size={s} fill="none" stroke="#ffffff90" strokeWidth={2} />
					{shellPoints[i].map((p, q) => {
						return <Circle key={`${q}`} cx={+p[0]} cy={+p[1]} size={7} fill={color} />;
					})}
				</Group>
			))}
		</Rect>
	);
};

Atom.propTypes = {
	color: PropTypes.string,
	cx: PropTypes.number,
	cy: PropTypes.number,
	shells: PropTypes.array,
	circ: PropTypes.number,
};

export default Atom;
