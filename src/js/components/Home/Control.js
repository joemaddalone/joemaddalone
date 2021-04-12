import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';
import { Svg, Square } from 'react-svg-path';
import './Control.css';

const LinkComponent = ({ url, children, type, interaction }) => {
	const ext = type === 'external';
	const activate = {
		onMouseOver: interaction,
		onFocus: interaction
	};
	return React.createElement(
		ext ? 'a' : Link,
		ext ? { href: url, target: '_blank', ...activate } : { to: url, ...activate },
		children
	);
};

LinkComponent.propTypes = {
	url: PropTypes.string,
	children: PropTypes.node,
	type: PropTypes.string,
	interaction: PropTypes.func
};

const Control = ({ control, setStr, active }) => {
	const [activated, setActivated] = useState(0);
	const strokeProps = useSpring({
		config: { duration: active ? 600 : 250 },
		to: { x: active ? 0 : 360 },
		from: { x: active ? 360 : 0 },
		onChange(values) {
			applyAnimatedValues(ref.current, values);
		}
	});
	const svgSize = 60;
	const center = svgSize / 2;
	const activate = () => {
		setStr(control);
		setActivated(activated + 1);
	};

	return (
		<LinkComponent type={control.type} url={control.url} interaction={activate}>
			<Svg width={svgSize} height={svgSize} className="flourish" style={{ pointerEvents: 'none' }}>
				{activated > 0 && (
					<animated.g id="control-box" strokeDashoffset={strokeProps.x}>
						<Square cx={center} cy={center} size={45} stroke={control.color} />
					</animated.g>
				)}
				<g transform="translate(19, 19)">
					<path className="icon" d={control.icon} fill={active ? control.color : '#222'} />
				</g>
			</Svg>
		</LinkComponent>
	);
};

Control.propTypes = {
	control: PropTypes.object,
	setStr: PropTypes.func,
	active: PropTypes.bool
};

export default Control;
