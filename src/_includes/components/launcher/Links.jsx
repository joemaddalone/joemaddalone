import React from 'react';
import PropTypes from 'prop-types';
import { Text, Group, Rect, Line } from 'react-svg-path';
import { useSprings, animated } from 'react-spring';

const wheres = [
    {
        color: '#7f9cf5',
        txt: 'I write sometimes',
        url: '/writes',
    },
    {
        color: '#9b7ede',
        txt: 'egghead.io',
        url: 'http://www.egghead.io/instructors/joe-maddalone',
    },
    {
        color: '#bcd2ee',
        txt: 'react-svg-path',
        url: 'https://joemaddalone.github.io/react-svg-path-docs',
    },
    { color: '#f26157', txt: 'FillText', url: 'http://www.filltext.com' },
    {
        color: '#7f9cf5',
        txt: 'React Loop',
        url: 'https://2019.reactloop.com/about',
    },
    {
        color: '#f5b7b1',
        txt: 'NWC JS Meetup',
        url: 'https://www.meetup.com/Northwest-Chicago-JavaScript/',
    },
];

const Links = ({ cx, cy }) => {
    const [springs, api] = useSprings(wheres.length, () => ({
        x: 360,
        color: '#222',
    }));

    const setterActive = (active, index) => ({
        x: active ? 0 : 360,
        color: active ? '#fff' : wheres[index].color,
        config: { duration: active ? 800 : 400 },
    });

    const activator = (index) => {
        return {
            onMouseOver: () => api.start((item) => item === index && setterActive(true, index)),
            onFocus: () => api.start((item) => item === index && setterActive(true, index)),
            onMouseOut: () => api.start((item) => item === index && setterActive(false, index)),
            onBlur: () => api.start((item) => item === index && setterActive(false, index))
        };
    };

    return (
        <Group transform={`translate(${cx}, ${cy})`} className="flourish">
            {springs.map((n, i) => {
                const len = wheres[i].txt.length * 11;
                return (
                    <animated.g key={i} className="control-box link" strokeDashoffset={n.x}>
                        <a href={wheres[i].url}>
                            <Rect
                                tabIndex={0}
                                cx={0}
                                cy={i * 30}
                                width={200}
                                height={25}
                                stroke="transparent"
                                strokeWidth={0.5}
                                radius={5}
                                fill="#eee"
                                {...activator(i)}>
                                <Line
                                    className="highlighter"
                                    sx={-len / 2}
                                    sy={i * 30}
                                    ex={len / 2}
                                    ey={i * 30}
                                    stroke={wheres[i].color}
                                    strokeWidth={3}
                                />
                                <Text fill={n.color} dy={2} className="middle">
                                    {wheres[i].txt}
                                </Text>
                            </Rect>
                        </a>
                    </animated.g>
                );
            })}
        </Group>
    );
};

Links.propTypes = {
    cx: PropTypes.number,
    cy: PropTypes.number,
    transition: PropTypes.func,
};

export default Links;
