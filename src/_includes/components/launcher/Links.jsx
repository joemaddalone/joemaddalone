import React from 'react';
import PropTypes from 'prop-types';

const wheres = [
    {
        color: '#7f9cf5',
        txt: 'I write sometimes',
        url: '/writes',
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
    {
        color: '#9b7ede',
        txt: 'egghead.io',
        url: 'http://www.egghead.io/instructors/joe-maddalone',
    }
];

const Links = () => {
    return (
        <div className="links">
            {wheres.map((where, i) => {
                return (
                    <a className="ui" href={where.url} key={i}>
                        {where.txt}
                    </a>
                );
            })}
        </div>
    );
};

Links.propTypes = {};

export default Links;
