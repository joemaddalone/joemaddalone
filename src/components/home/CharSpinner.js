import React from 'react';
import { Motion, spring, presets } from 'react-motion';

class CharSpinner extends React.Component {
	constructor() {
		super();
		this.chars = '\',abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.'.split('');
	}

	findPos = (char) => {
		return this.chars.indexOf(char);
	};

	render() {
		return (
			<Motion defaultStyle={{ top: 0 }} style={{ top: spring(this.findPos(this.props.char), presets.wobbly) }}>
				{val => {
					let style = {
						position: 'absolute',
						top: (val.top * 55) * -1
					};
					return (
						<div className="tile">
							<div style={style}>
								{this.chars.map(char => {
									let tileClass = 'tile-char';
									if (char === this.props.char) {
										tileClass += ' active ';
									}
									return <div key={char} className={tileClass}>{char}</div>;
								})}
							</div>
						</div>
					);
				}}
			</Motion>
		);
	}
}

export default CharSpinner;