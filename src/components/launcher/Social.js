import React from 'react';
import PropTypes from 'prop-types';
import SocialButton from './SocialButton';

const Social = ({ transition, cx, cy, controls }) => {
	const offset = (controls.length - 1) * 30;
	return controls.map((control, index) => {
		return (
			<SocialButton
				offset={offset}
				cx={cx}
				cy={cy}
				transition={transition}
				ox={index * 30}
				key={control.id}
				control={control}
			/>
		);
	});
};

Social.propTypes = {
	transition: PropTypes.func.isRequired,
	cx: PropTypes.number.isRequired,
	cy: PropTypes.number.isRequired,
	controls: PropTypes.array.isRequired,
};

export default Social;
