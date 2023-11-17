import React from 'react';
import PropTypes from 'prop-types';
import { Circle, Group, Text } from 'react-svg-path';

const sketchStroke_0 = '#ddd';
const sketchStroke_1 = '#004';
const sketchFill_0 = '#eee';
// const size = 70;

const textStyle = {
    dominantBaseline: 'middle',
    textAnchor: 'middle',
};

const Heading = ({ cx, cy, ox, click, size, content = 'A' }) => {
    return (
        <Group>
            <Circle
                class="pointer"
                onClick={click}
                cx={cx}
                cy={cy}
                size={size}
                ox={ox}
                fill="transparent"
                strokeWidth="4"
                stroke={sketchStroke_0}
            />
            {/* <Circle cx={cx} cy={cy} size={65} ox={ox} fill={sketchFill_0} strokeWidth="0" /> */}
            <Circle cx={cx} cy={cy} size={size} fill="none"></Circle>
            <Group className="animated-group" transform={`translate(${cx}, ${cy})`}>
                <Text style={{ ...textStyle }} x={0} y={0}>
                    {content}
                </Text>
                {/* <RadialLines innerSize={size} outerSize={size * 1.1} points={50} className="line-high rotate45" /> */}
                {/* <RadialLines innerSize={size * 0.8} outerSize={size} points={4} className="line-high rotate45" /> */}
            </Group>
        </Group>
    );
};

Heading.propTypes = {
    cx: PropTypes.number,
    cy: PropTypes.number,
    ox: PropTypes.number,
    click: PropTypes.func,
    size: PropTypes.number,
    content: PropTypes.string,
};

export default Heading;
