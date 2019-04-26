import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Spring } from 'react-spring/renderprops';
import Path from '../svg/Path';
import './Control.css';

const LinkComponent = ({ url, children, type, interaction }) => {
	const ext = type === 'external';
	const activate = {
		onMouseOver: interaction,
		onFocus: interaction
	};
	return React.createElement(ext ? 'a' : Link, ext ? { href: url, target: '_blank', ...activate } : { to: url, ...activate}, children);
};

LinkComponent.propTypes = {
	url: PropTypes.string,
	children: PropTypes.node,
	type: PropTypes.string,
	interaction: PropTypes.func
};

const Control = ({ control, setStr, active }) => {
	const [activated, setActivated] = useState(0);
	const svgSize = 60;
	const size = 45;
	const center = svgSize / 2;
	const x = center - size / 2;
	const y = x;
	const path = new Path()
		.moveTo(x, y)
		.lineTo(x + size, y)
		.lineTo(x + size, y + size)
		.lineTo(x, y + size)
		.lineTo(x, y);

	path.attr('stroke', control.color);

	const activate = () => {
		setStr(control);
		setActivated(activated + 1);
	};

	return (
		<LinkComponent type={control.type} url={control.url} interaction={activate}>
			<svg width={svgSize} height={svgSize} className="flourish" style={{pointerEvents: 'none'}}>
				{activated > 0 && (
					<g id="control-box">
						<Spring
							config={{ duration: active ? 600 : 250 }}
							from={{ x: active ? 360 : 0 }}
							to={{ x: active ? 0 : 360 }}>
							{({ x }) => <path d={path.toString()} stroke={control.color} strokeDashoffset={x} />}
						</Spring>
					</g>
				)}
				<g transform="translate(19, 19)">
					<path className="icon" d={control.icon} fill={active ? control.color : '#222'} />
				</g>
			</svg>
		</LinkComponent>
	);
};

Control.propTypes = {
	control: PropTypes.object,
	setStr: PropTypes.func,
	active: PropTypes.bool
};

export default Control;
