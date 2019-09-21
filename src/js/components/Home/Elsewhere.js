import React from 'react';
import './Elsewhere.css';
const Elsewhere = () => {
	const wheres = [
		{ txt: 'egghead.io', url: 'http://www.egghead.io/instructors/joe-maddalone' },
		{ txt: 'htmlstack', url: 'http://www.htmlstack.com' },
		{ txt: 'FillText', url: 'http://www.filltext.com' },
		{ txt: 'React Loop', url: 'https://2019.reactloop.com/about' }
	];
	return (
		<div className="elsewhere flex flex-column justify-center items-center courier">
			<h2>elsewhere</h2>
			{wheres.map((w, i) => (
				<a key={i} href={w.url} target="_blank">
					{w.txt}
				</a>
			))}
		</div>
	);
};

export default Elsewhere;
