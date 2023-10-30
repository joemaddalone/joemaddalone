import React from 'react';
import { Circle, Line, Group } from 'react-svg-path';

const sketchStroke_0 = '#ddd';

import PropTypes from 'prop-types';

const Sketch = ({ col_a, col_b, centralSize, cx, cy }) => {
    return (
        <Group>
            {/* <Line sx={col_a.x - 40} sy={0} ex={col_a.x - 40} ey={8000} strokeWidth="1" stroke={sketchStroke_0} /> */}
            {/* <Line sx={col_b.x + 40} sy={0} ex={col_b.x + 40} ey={8000} strokeWidth="1" stroke={sketchStroke_0} /> */}
            <Circle cx={cx} cy={cy} size={centralSize * 1.10} fill="none" strokeWidth="1" stroke={sketchStroke_0} />
            {/* <Circle cx={cx} cy={cy} size={centralSize * 3.525} fill="none" strokeWidth="1" stroke={sketchStroke_0} /> */}
			{/* <Circle cx={cx} cy={cy} size={centralSize * 3} fill="none" strokeWidth="1" stroke={sketchStroke_0} /> */}
        </Group>
    );
};

Sketch.propTypes = {
    col_a: PropTypes.object.isRequired,
    col_b: PropTypes.object.isRequired,
	centralSize: PropTypes.number.isRequired,
	cx: PropTypes.number,
	cy: PropTypes.number,
};

export default Sketch;
