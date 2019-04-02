import React from 'react';

const Elsewhere = () => {
	let wheres = [
		{ txt: 'egghead.io', url: "http://www.egghead.io/instructors/joe-maddalone" },
		{ txt: 'htmlstack', url: 'http://www.htmlstack.com' },
		{ txt: 'JavascriptOO', url: 'http://www.javascriptoo.com' },
		{ txt: 'FillText', url: 'http://www.filltext.com' },
		{ txt: 'PackageManager.org', url: 'http://www.packagemanager.org' },
		{ txt: 'printz', url: 'http://www.printz.org' },
		{ txt: 'Insert Title', url: 'http://www.insert-title.com' },
	];
	let links = wheres.map( ( w, i ) => <a key={i} href={w.url}>{w.txt}</a> );
	return <div className="elsewhere"><h2>ElseWhere</h2>{links}</div>;
};

export default Elsewhere;