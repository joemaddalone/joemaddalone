import React from 'react';
import PropTypes from 'prop-types';
import SocialButton from './SocialButton';

const Social = ({ cx, cy, controls }) => {
	const offset = (controls.length - 1) * 30;
	return controls.map((control, index) => {
		return (
			<SocialButton
				offset={offset}
				cx={cx}
				cy={cy}
				ox={index * 30}
				key={control.id}
				control={control}
			/>
		);
	});
};

Social.propTypes = {
	cx: PropTypes.number,
	cy: PropTypes.number,
	controls: PropTypes.array,
};

export default Social;
