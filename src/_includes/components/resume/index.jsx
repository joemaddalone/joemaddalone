import React from 'react';
import Path, { Svg, Circle, Segment, Line, Text, Rect, MarkerTriangle } from 'react-svg-path';
import icons from './icons';
import Sketch from './Sketch';
import Heading from './Heading';
import './resume.css';

const socialLinks = [
    {
        id: 'twitter',
        txt: 'Twitter',
        msg: 'I tweet now and then.',
        icon: icons.twitter,
        url: 'http://www.twitter.com/joemaddalone',
        type: 'external',
        color: '#0084b4',
    },
    {
        id: 'github',
        txt: 'Github',
        msg: 'I build and share.',
        icon: icons.github,
        url: 'http://www.github.com/joemaddalone',
        type: 'external',
        color: '#333',
    },
    {
        id: 'linkedin',
        txt: 'LinkedIn',
        msg: 'I lead and grow.',
        icon: icons.linkedin,
        url: 'http://www.linkedin.com/in/joemaddalone',
        type: 'external',
        color: '#0077b5',
    },
    {
        id: 'youtube',
        txt: 'YouTube',
        msg: 'I learn and teach.',
        icon: icons.youtube,
        url: 'http://www.youtube.com/joemaddalone',
        type: 'external',
        color: '#ff0000',
    },
];

const svgWidth = 875; // window.innerWidth - 25;
const svgHeight = 875;
const centralSize = 180;
const cx = svgWidth / 2;
const cy = svgHeight / 2;
const offset = 1.6;

const makeClockPoints = (cx, cy, size) => {
    return Array.from({ length: 12 }).reduce((accum, cur, i) => {
        const angle = i * 30;
        const point = Path.clockwisePoint(cx, cy, size, angle);
        return { ...accum, [`_${i}`]: point };
    }, {});
};

const inner = makeClockPoints(cx, cy, centralSize / offset);
const outer = makeClockPoints(cx, cy, centralSize);
const outerMost = makeClockPoints(cx, cy, centralSize * 1.5);

const col_a = { x: cx - 250 };
const col_b = { x: cx + 250 };

const sketchStroke_0 = '#ddd';
const sketchStroke_1 = '#004';
const sketchFill_0 = '#eee';

const textStyle = {
    dominantBaseline: 'middle',
    textAnchor: 'middle',
};

const Resume = () => {
    return (
        <Svg width={svgWidth} height={svgHeight}>
            <MarkerTriangle markerStyle={{ fill: sketchStroke_0 }} id="arrow-marker" />
            <defs>
                {socialLinks.map((control) => {
                    return <path id={control.id} key={control.id} d={control.icon} className="icon" />;
                })}
            </defs>
            <Sketch col_a={col_a} col_b={col_b} centralSize={centralSize} />
            <Circle size={centralSize} fill="none" strokeWidth="4" stroke={sketchStroke_0}>
                <Text style={{ ...textStyle }}>interface</Text>
            </Circle>
            <Circle cx={inner._2.x} cy={inner._2.y} size="10" fill={sketchStroke_0} />
            <Circle cx={inner._3.x} cy={inner._3.y} size="10" fill={sketchStroke_0} />
            <Circle cx={inner._8.x} cy={inner._8.y} size="10" fill={sketchStroke_0} />
            <Circle cx={inner._10.x} cy={inner._10.y} size="10" fill={sketchStroke_0} />

            {/* <Rect
                cx={col_a.x + 30}
                cy={outerMost._11.y + 115}
                width={200}
                height={140}
                fill="none"
                strokeWidth="0"
                stroke={sketchStroke_0}>
                <Text style={{ ...textStyle }}>CONTENT</Text>
            </Rect> */}

            {/* <Rect
                cx={col_a.x + 30}
                cy={outerMost._9.y + 135}
                width={200}
                height={180}
                fill="none"
                strokeWidth="0"
                stroke={sketchStroke_0}>
                <Text style={{ ...textStyle }}>CONTENT</Text>
            </Rect> */}

            {/* <Rect
                cx={col_a.x + 30}
                cy={outerMost._6.y + 135}
                width={200}
                height={180}
                fill="none"
                strokeWidth="0"
                stroke={sketchStroke_0}>
                <Text style={{ ...textStyle }}>CONTENT</Text>
            </Rect> */}

            {/* <Rect
                cx={col_b.x - 20}
                cy={outerMost._2.y + 60}
                width={200}
                height={230}
                fill="none"
                strokeWidth="0"
                stroke={sketchStroke_0}>
                <Text style={{ ...textStyle }}>CONTENT</Text>
            </Rect> */}

            {/* <Rect
                cx={col_b.x - 90}
                cy={outerMost._6.y + 50}
                width={350}
                height={350}
                fill="none"
                strokeWidth="0"
                stroke={sketchStroke_0}>
                <Text style={{ ...textStyle }}>CONTENT</Text>
            </Rect> */}

            {/* profile */}
            <Circle cx={inner._0.x} cy={inner._0.y} size="10" fill={sketchStroke_0} />
            <Segment
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
                ex={outerMost._11.x}
                ey={outerMost._11.y}
                strokeWidth="4"
                stroke={sketchStroke_0}
            />
            <Line
                markerEnd="url(#arrow-marker)"
                sx={outerMost._11.x}
                sy={outerMost._11.y}
                ex={col_a.x}
                ey={outerMost._11.y}
                strokeWidth="4"
                stroke={sketchStroke_0}>
                <Heading ox={-40} />
            </Line>

            {/* skills */}
            <Segment
                size={centralSize * 1.25}
                startAngle={270}
                endAngle={300}
                fill="none"
                strokeWidth="3"
                stroke={sketchStroke_0}
            />
            <Line
                markerEnd="url(#arrow-marker)"
                sx={inner._9.x}
                sy={inner._9.y}
                ex={col_a.x}
                ey={inner._9.y}
                strokeWidth="4"
                stroke={sketchStroke_0}>
                <Heading ox={-40} />
            </Line>

            {/* bottom left */}
            <Segment
                size={centralSize * 1.25}
                startAngle={210}
                endAngle={240}
                fill="none"
                strokeWidth="4"
                stroke={sketchStroke_0}
            />
            <Line
                sx={inner._7.x}
                sy={inner._7.y}
                ex={outerMost._7.x}
                ey={outerMost._6.y}
                strokeWidth="4"
                stroke={sketchStroke_0}>
                <Line
                    markerEnd="url(#arrow-marker)"
                    ex={col_a.x}
                    ey={outerMost._6.y}
                    strokeWidth="4"
                    stroke={sketchStroke_0}>
                    <Heading ox={-40} />
                </Line>
            </Line>

            {/* work */}
            <Segment
                size={centralSize * 1.25}
                startAngle={30}
                endAngle={60}
                fill="none"
                strokeWidth="4"
                stroke={sketchStroke_0}
            />
            <Line
                sx={inner._1.x}
                sy={inner._1.y}
                ex={outerMost._1.x}
                ey={outerMost._1.y}
                strokeWidth="4"
                stroke={sketchStroke_0}>
                <Line
                    markerEnd="url(#arrow-marker)"
                    ex={col_b.x}
                    ey={outerMost._1.y}
                    strokeWidth="4"
                    stroke={sketchStroke_0}>
                    <Heading ox={40} />
                </Line>
            </Line>

            {/* bottom right */}
            <Segment
                size={centralSize * 1.25}
                startAngle={90}
                endAngle={4 * 30}
                fill="none"
                strokeWidth="4"
                stroke={sketchStroke_0}
            />
            <Line
                sx={inner._4.x}
                sy={inner._4.y}
                ex={outer._4.x}
                ey={outer._4.y}
                strokeWidth="4"
                stroke={sketchStroke_0}>
                <Line
                    markerEnd="url(#arrow-marker)"
                    ex={col_b.x}
                    ey={outer._4.y}
                    strokeWidth="4"
                    stroke={sketchStroke_0}>
                    <Heading ox={40} />
                </Line>
            </Line>
        </Svg>
    );
};

export default Resume;
