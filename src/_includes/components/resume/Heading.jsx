import React from 'react';
import PropTypes from 'prop-types';
import { Circle, Group, RadialLines } from 'react-svg-path';

const sketchStroke_0 = '#ddd';
const sketchStroke_1 = '#004';
const sketchFill_0 = '#eee';
const size = 70;

const Heading = ({ cx, cy, ox }) => {
    return (
        <Group>
            <Circle cx={cx} cy={cy} size={size} ox={ox} fill="#fff" strokeWidth="4" stroke={sketchStroke_0} />
            {/* <Circle cx={cx} cy={cy} size={65} ox={ox} fill={sketchFill_0} strokeWidth="0" /> */}
            <Circle cx={cx} cy={cy} size={size} fill="none" className="line-high">
                {/* <RadialLines innerSize={size} outerSize={size * 1.1} points={50} className="line-high rotate45" /> */}
                <RadialLines innerSize={size * 0.8} outerSize={size} points={4} className="line-high rotate45" />
            </Circle>
        </Group>
    );
};

Heading.propTypes = {
    cx: PropTypes.number,
    cy: PropTypes.number,
    ox: PropTypes.number,
};

export default Heading;
