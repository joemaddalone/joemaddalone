import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Path, {
    Group,
    Svg,
    Circle,
    Segment,
    Line,
    Text,
    RoundedRect,
    MarkerTriangle,
    SymX,
    RadialLines,
} from 'react-svg-path';
import icons from './icons';
import Sketch from './Sketch';
import Heading from './Heading';
import Pointers from './Pointers';
import './resume.css';

const makeClockPoints = (cx, cy, size) => {
    return Array.from({ length: 12 }).reduce((accum, cur, i) => {
        const angle = i * 30;
        const point = Path.clockwisePoint(cx, cy, size, angle);
        return { ...accum, [`_${i}`]: point };
    }, {});
};

const sketchStroke_0 = '#ddd';
const sketchStroke_1 = '#004';
const sketchFill_0 = '#eee';

const textStyle = {
    dominantBaseline: 'middle',
    textAnchor: 'middle',
};

const section = {
    a: {
        label: 'a',
        w: 500,
        h: 300,
        cs: 225,
    },
    b: {
        label: 'b',
        w: 250,
        h: 400,
        cs: 180,
    },
    c: {
        label: 'c',
        w: 525,
        h: 400,
        cs: 225,
    },
    d: {
        label: 'd',
        w: 550,
        h: 250,
        cs: 225,
    },
    e: {
        label: 'e',
        w: 500,
        h: 180,
        cs: 225,
    },
};

const Resume = () => {
    const [centralSize, setCentralSize] = useState(80);
    const [activated, setActivated] = useState(false);
    const [activeSection, setSection] = useState(null);
    const svgWidth = 700; // window.innerWidth - 25;
    const svgHeight = 700;
    const cx = svgWidth / 2;
    const cy = svgHeight / 2;
    const offset = 1.6;
    const inner = makeClockPoints(cx, cy, centralSize / offset);
    const outer = makeClockPoints(cx, cy, centralSize);
    const outerMost = makeClockPoints(cx, cy, centralSize * 1.1);
    const col_a = { x: cx - 250 };
    const col_b = { x: cx + 250 };

    const headingSpring = useSpring({
        config: { duration: activated ? 200 : 0 },
        to: { rh: activated ? 20 : 80 },
        from: { rh: activated ? 80 : 20 },
        onRest: () => {
            setCentralSize(activated ? activeSection.cs : 125);
            setSection(activated ? activeSection : null);
        },
    });
    const AnimatedH = animated(Heading);

    const updateSection = (val) => {
        setSection(val);
        setActivated(true);
    };
    return (
        <Svg width={svgWidth} height={svgHeight} id="resume-svg">
            <MarkerTriangle markerStyle={{ fill: '#20a0c1' }} id="arrow-marker" />
            <Sketch col_a={col_a} col_b={col_b} centralSize={centralSize} />
            {!activated && (
                <RadialLines
                    innerSize={centralSize * 0.8}
                    outerSize={centralSize * 0.9}
                    points={8}
                    cx={cx}
                    cy={cy}
                    stroke="#999"
                />
            )}

            {/* <Rect
                cx={col_a.x + 30}
                cy={outerMost._11.y + 115}
                width={200}
                height={140}
                fill="none"
                strokeWidth="0"
                stroke={sketchStroke_0}>
                <foreignObject x={col_a.x - 70} y={outerMost._11.y + 45} width="225" height="140">
                    <b>Heading</b>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum distinctio cumque maiores, eius
                        fuga tempore nesciunt quibusdam quidem laboriosam reiciendis asperiores?
                    </p>
                </foreignObject>
            </Rect> */}

            {/* <Rect
                cx={col_a.x + 30}
                cy={outerMost._9.y + 135}
                width={200}
                height={180}
                fill="none"
                strokeWidth="0"
                stroke={sketchStroke_0}>
                <foreignObject x={col_a.x - 70} y={outerMost._9.y + 45} width="225" height="180">
                    <b>Profile</b>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum distinctio cumque maiores, eius
                        fuga tempore nesciunt quibusdam quidem laboriosam reiciendis asperiores? Quaerat, atque illo
                        perspiciatis sit aut dolor numquam architecto
                    </p>
                </foreignObject>
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
            {200 !== 180 && (
                <Pointers
                    inner={inner}
                    outer={outer}
                    outerMost={outerMost}
                    col_a={col_a}
                    col_b={col_b}
                    centralSize={centralSize}
                    activated={activated}
                />
            )}
            {180 === 180 && (
                <Group>
                    <AnimatedH
                        content="A"
                        size={headingSpring.rh}
                        cx={col_b.x + 40}
                        cy={outerMost._1.y}
                        click={() => updateSection(section.a)}
                    />
                    <AnimatedH
                        content="B"
                        size={headingSpring.rh}
                        cx={col_b.x + 40}
                        cy={outer._4.y}
                        click={() => updateSection(section.b)}
                    />
                    <AnimatedH
                        content="C"
                        size={headingSpring.rh}
                        cx={col_a.x - 40}
                        cy={outerMost._6.y}
                        click={() => updateSection(section.c)}
                    />
                    <AnimatedH
                        content="D"
                        size={headingSpring.rh}
                        cx={col_a.x - 40}
                        cy={outerMost._9.y}
                        click={() => updateSection(section.d)}
                    />
                    <AnimatedH
                        content="E"
                        size={headingSpring.rh}
                        cx={col_a.x - 40}
                        cy={outerMost._11.y}
                        click={() => updateSection(section.e)}
                    />
                </Group>
            )}

            <RoundedRect
                radius={activated ? 8 : centralSize}
                width={activated ? activeSection.w : centralSize}
                height={activated ? activeSection.h : centralSize}
                fill={activated ? '#fff8' : 'none'}
                strokeWidth="4"
                stroke={sketchStroke_0}>
                <Text style={{ ...textStyle }}>{activated ? activeSection.label : 'interface'}</Text>
            </RoundedRect>

            {activated && (
                <Group>
                    {/* <RadialLines
                        innerSize={centralSize * 1.1}
                        outerSize={centralSize * 1.15}
                        points={12}
                        cx={cx}
                        cy={cy}
                        stroke="#999"
                    /> */}
                    <Circle
                        onClick={() => setActivated(false)}
                        size={25}
                        cy={cy - 50}
                        className="pointer"
                        fill="#fff"
                        stroke="#222">
                        <SymX width={10} height={10} stroke="#222" style={{ pointerEvents: 'none' }} />
                    </Circle>
                </Group>
            )}
        </Svg>
    );
};

export default Resume;
