import React from 'react';
import { Svg, Rect, Text } from 'react-svg-path';
import Gridset from 'gridset';
import propTypes from 'prop-types';
import './diagram.css';

const grid = new Gridset({
    cols: 12,
    rows: 12,
    width: 1200,
    height: 1200,
    cellWidth: 100,
    cellHeight: 100,
});
const graph = {
    width: 1200,
    height: 700,
    elements: {
        pihole: {
            props: {
                cx: grid.col(4).cx,
                cy: grid.row(1).cy,
                width: 400,
                height: 100,
            },
            shape: Rect,
            text: 'pihole',
        },
        rtorrent: {
            props: {
                cx: grid.col(4).cx - 100,
                cy: grid.row(0).cy,
                width: 200,
                height: 100,
            },
            shape: Rect,
            text: 'rtorrent',
        },
        jackett: {
            props: {
                cx: grid.col(4).cx + 100,
                cy: grid.row(0).cy,
                width: 200,
                height: 100,
            },
            shape: Rect,
            text: 'jackett',
        },
        bazarr: {
            props: {
                cx: grid.col(0).r + 50,
                cy: grid.row(6).cy,
                width: 200,
                height: 100,
            },
            shape: Rect,
            text: 'bazarr',
        },
        apprise: {
            props: {
                cx: grid.col(9).cx - 100,
                cy: grid.row(1).cy,
                width: 200,
                height: 100,
            },
            shape: Rect,
            text: 'apprise',
        },
        tautulli: {
            props: {
                cx: grid.col(7).cx,
                cy: grid.row(6).cy,
                width: 200,
                height: 100,
            },
            shape: Rect,
            text: 'tautulli',
        },
        pvr: {
            props: {
                cx: grid.col(4).cx,
                cy: grid.row(1).cy,
                width: 400,
                height: 100,
            },
            shape: Rect,
            text: 'Radarr, Sonarr, etc.',
        },
        media: {
            props: {
                cx: grid.col(4).cx,
                cy: grid.row(6).cy,
                width: 400,
                height: 100,
            },
            shape: Rect,
            text: 'Plex, Calibre, etc.',
        },
        overseerr: {
            props: {
                cx: grid.col(0).r + 50,
                cy: grid.row(1).cy,
                width: 200,
                height: 100,
            },
            shape: Rect,
            text: 'overseerr',
        },
        reseed: {
            props: {
                cx: grid.col(4).cx,
                cy: grid.row(3).cy,
                width: 400,
                height: 100,
            },
            shape: Rect,
            text: 'reseed (8TB)',
            to: ['storage'],
        },
        storage: {
            props: {
                cx: grid.col(4).cx,
                cy: grid.row(4).cy,
                width: 400,
                height: 100,
            },
            shape: Rect,
            text: 'storage (56TB)',
        },
        unpackerr: {
            props: {
                cx: grid.col(4).cx,
                cy: grid.row(2).cy,
                width: 400,
                height: 100,
            },
            shape: Rect,
            text: 'unpackerr',
        },
        tmm: {
            props: {
                cx: grid.col(4).cx,
                cy: grid.row(5).cy,
                width: 400,
                height: 100,
            },
            shape: Rect,
            text: 'tiny media manager',
        },
    },
};

const Node = (el) => {
    const width = el.props.width - 10;
    const height = el.props.height - 10;
    return (
        <el.shape {...el.props} width={width} height={height} fill="white" stroke="red">
            <Text className="middle">{el.text}</Text>
        </el.shape>
    );
};

Node.propTypes = {
    shape: propTypes.any,
    props: propTypes.object,
};

export default function App() {
    return (
        <Svg
            className="home-server-diagram pa3"
            width={graph.width}
            height={graph.height}
            scale
            style={{ maxWidth: 800 }}>
                <Text sy={50} sx={700}>
                    Media management architecture
                </Text>
            <Node {...graph.elements.rtorrent} />
            <Node {...graph.elements.jackett} />
            <Node {...graph.elements.pvr} />
            <Node {...graph.elements.overseerr} />
            <Node {...graph.elements.reseed} />
            <Node {...graph.elements.unpackerr} />
            <Node {...graph.elements.storage} />
            <Node {...graph.elements.media} />
            <Node {...graph.elements.bazarr} />
            <Node {...graph.elements.tautulli} />
            <Node {...graph.elements.tmm} />
        </Svg>
    );
}
