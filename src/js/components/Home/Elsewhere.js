import React from 'react';
import './Elsewhere.css';
const Elsewhere = () => {
	const wheres = [
		{ txt: 'egghead.io', url: "http://www.egghead.io/instructors/joe-maddalone" },
		{ txt: 'htmlstack', url: 'http://www.htmlstack.com' },
		{ txt: 'JavascriptOO', url: 'http://www.javascriptoo.com' },
		{ txt: 'FillText', url: 'http://www.filltext.com' },
		{ txt: 'React Loop', url: 'https://reactloop.com/about' }
	];
	const links = wheres.map( ( w, i ) => <a key={i} href={w.url} target="_blank">{w.txt}</a> );
	return <div className="elsewhere"><h2>ElseWhere</h2>{links}</div>;
};

export default Elsewhere;
