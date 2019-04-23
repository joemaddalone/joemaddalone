import React, { useState } from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { Spring } from "react-spring/renderprops";
import Path from "../svg/Path";
import "./Flourish.css";


const InternalLink = ({url, children}) => (
	<Link to={url}>
		{children}		
	</Link>
);

InternalLink.propTypes = {
	url: PropTypes.string,
	children: PropTypes.node
};

const ExternalLink = ({url, children}) => (
	<a href={url} target="_blank">
		{children}
	</a>
);

ExternalLink.propTypes = {
	url: PropTypes.string,
	children: PropTypes.node
};

const Control = ({ control, setStr, active }) => {
	const [activated, setActivated] = useState(0);
	const svgSize = 60;
	const size = 45;
	const center = svgSize / 2;
	const x = center - size / 2;
	const y = center - size / 2;
	const path = new Path()
		.moveTo(x, y)
		.lineTo(x + size, y)
		.lineTo(x + size, y + size)
		.lineTo(x, y + size)
		.lineTo(x, y);

	path.attr("stroke", control.color);


	const activate = () => {
		setStr(control);
		setActivated(activated + 1);
	};

	const LinkComponent = control.type === 'external' ? ExternalLink : InternalLink;

	return (
		<LinkComponent url={control.url}>
		<div
			className="control"
			style={{ width: svgSize }}
			tabIndex={0}
			role="button"
			onFocus={activate}
			onMouseOver={activate}
			key={control.icon}
		>
			<svg width={svgSize} height={svgSize} className="flourish">

				{activated > 0 && (
					<g id="control-box">
						<Spring config={{ duration: active ? 600 : 250 }} from={{ x: active ? 360 : 0 }} to={{ x: active ? 0 : 360 }}>
							{({ x }) => <path d={path.toString()} stroke={control.color} strokeDashoffset={x} />}
						</Spring>
					</g>
					)}


				
				<g transform="translate(19, 19)">
				<path className="icon" d={control.icon}  fill={active ? control.color : "#222"}></path>
				</g>
			</svg>
		</div>
		</LinkComponent>
	);
};

Control.propTypes = {
	control: PropTypes.object,
	setStr: PropTypes.func,
	active: PropTypes.bool
};

export default Control;
