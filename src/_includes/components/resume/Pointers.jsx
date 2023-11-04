import React from 'react';
import PropTypes from 'prop-types';
import { Circle, Group, Segment, Line } from 'react-svg-path';

const sketchStroke_0 = '#ddd';
const sketchStroke_1 = '#004';
const sketchFill_0 = '#eee';
// const size = 70;

const Pointers = ({ inner, outer, outerMost, col_a, col_b, centralSize, cx, cy, activated }) => {
    const offset = activated ? -5 : 5;
    return (
        <Group className="line-high">
            <Circle cx={inner._2.x} cy={inner._2.y} size="5" className="fill-high" />
            <Circle cx={inner._3.x} cy={inner._3.y} size="5" className="fill-high" />
            <Circle cx={inner._8.x} cy={inner._8.y} size="5" className="fill-high" />
            <Circle cx={inner._10.x} cy={inner._10.y} size="5" className="fill-high" />
            <Circle cx={inner._0.x} cy={inner._0.y} size="5" className="fill-high" />
            {/* top left */}
            <Segment cx={cx} cy={cy} size={centralSize * 1.25} startAngle={330} endAngle={0} fill="none" />
            <Line sx={inner._11.x} sy={inner._11.y} ex={outerMost._11.x} ey={outerMost._11.y}>
            <Line
                markerEnd="url(#arrow-marker)"
                ex={col_a.x + centralSize/25}
                ey={outerMost._11.y}
            />
            </Line>

            {/* mid left */}
            <Segment cx={cx} cy={cy} size={centralSize * 1.25} startAngle={270} endAngle={300} fill="none" />
            <Line markerEnd="url(#arrow-marker)" sx={inner._9.x} sy={inner._9.y} ex={col_a.x + 5} ey={inner._9.y} />

            {/* bottom left */}
            <Segment cx={cx} cy={cy} size={centralSize * 1.25} startAngle={210} endAngle={240} fill="none" />
            <Line sx={inner._7.x} sy={inner._7.y} ex={outerMost._7.x} ey={outerMost._6.y}>
                <Line markerEnd="url(#arrow-marker)" ex={col_a.x + 5} ey={outerMost._6.y} />
            </Line>

            {/* top right */}
            <Segment cx={cx} cy={cy} size={centralSize * 1.25} startAngle={30} endAngle={60} fill="none" />
            <Line sx={inner._1.x} sy={inner._1.y} ex={outerMost._1.x} ey={outerMost._1.y}>
                <Line markerEnd="url(#arrow-marker)" ex={col_b.x - 5} ey={outerMost._1.y} />
            </Line>

            {/* bottom right */}
            <Segment cx={cx} cy={cy} size={centralSize * 1.25} startAngle={90} endAngle={4 * 30} fill="none" />
            <Line sx={inner._4.x} sy={inner._4.y} ex={outer._4.x} ey={outer._4.y}>
                <Line markerEnd="url(#arrow-marker)" ex={col_b.x - 5} ey={outer._4.y} />
            </Line>
        </Group>
    );
};

Pointers.propTypes = {
    inner: PropTypes.object,
    outer: PropTypes.object,
    outerMost: PropTypes.object,
    col_a: PropTypes.object,
    col_b: PropTypes.object,
    centralSize: PropTypes.number,
    cx: PropTypes.number,
    cy: PropTypes.number,
    activated: PropTypes.bool,
};

export default Pointers;
