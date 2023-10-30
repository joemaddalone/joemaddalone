import React from 'react';
import { Circle, Segment, Line, Group } from 'react-svg-path';


const sketchStroke_0 = '#ddd';
const sketchStroke_1 = '#004';
const sketchFill_0 = '#eee';

const Heading = ({ col_a, col_b, inner, outer, centralSize, cx, cy, children }) => {
    return (
        <Group>
            <Segment
				cx={cx}
				cy={cy}
                size={centralSize * 1.25}
                startAngle={330}
                endAngle={0}
                fill="none"
                strokeWidth="4"
                stroke={sketchStroke_0}
            />
            <Line
                sx={inner._11.x}
                sy={inner._11.y}
                ex={outer._11.x}
                ey={outer._11.y}
                strokeWidth="4"
                stroke={sketchStroke_0}
            />
            <Line
                sx={outer._11.x}
                sy={outer._11.y}
                ex={col_a.x}
                ey={outer._11.y}
                strokeWidth="4"
                stroke={sketchStroke_0}>
                <Circle size={80} ox={-40} fill="#fff" strokeWidth="4" stroke={sketchStroke_0} />
                <Circle size={65} ox={-40} fill={sketchFill_0} strokeWidth="0" />
            </Line>

        </Group>
    );
};


Heading.propTypes = {
    inner: PropTypes.object.isRequired,
    outer: PropTypes.object.isRequired,
	centralSize: PropTypes.number.isRequired,
	cx: PropTypes.number,
	cy: PropTypes.number,
	col_a: PropTypes.object.isRequired,
	col_b: PropTypes.object.isRequired,
};


export default Heading;




