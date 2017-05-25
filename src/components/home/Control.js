import React from 'react';
import { Link } from 'react-router-dom';

const InternalLink = (props) => (
	<Link to={props.url}>
		<img alt={props.title} src={props.icon} style={{ width: 32, height: 32 }} />
	</Link>
);

const ExternalLink = (props) => (
	<a href={props.url}>
		<img alt={props.title} src={props.icon} style={{ width: 32, height: 32 }} />
	</a>
);

const Control = (props) => (
	<div className="control-item" onMouseOver={props.m.bind(null, props.txt)}>
		{props.type === 'internal'
			? <InternalLink {...props} />
			: <ExternalLink {...props} />}
	</div>
);

export default Control;