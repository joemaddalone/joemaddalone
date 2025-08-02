import React from 'react';
import { Rect, Svg, Text, Polyline, MarkerTriangle, Quad } from 'react-svg-path/dist/index.esm.js';
import './red.css';

import dagre from 'dagre';

// graph	rankdir	TB	Direction for rank nodes. Can be TB, BT, LR, or RL, where T = top, B = bottom, L = left, and R = right.
// graph	align	undefined	Alignment for rank nodes. Can be UL, UR, DL, or DR, where U = up, D = down, L = left, and R = right.

const createDag = () => {
    const g = new dagre.graphlib.Graph();
    g.setGraph({
        rankdir: 'LR',
        marginx: 10,
        marginy: 10,
        nodesep: 20,
        ranksep: 50,
    });
    g.setDefaultEdgeLabel(() => ({}));

    const labelNode = { width: 100, height: 80 };
    const descriptionNode = { width: 215, height: 80 };

    g.setNode('rr', { id: 'rr', label: 'ff', ...labelNode });
    g.setNode('r0', { id: 'rr', label: 'f', ...labelNode });
    g.setNode('r1', { id: 'rr', label: 'f', ...labelNode });
    g.setNode('r0m', { label: '15 x 16', ...descriptionNode });
    g.setNode('r1m', { label: '15 x 1', ...descriptionNode });
    g.setNode('ra', { label: '240 + 15', ...descriptionNode });

    g.setEdge('rr', 'r0');
    g.setEdge('rr', 'r1');
    g.setEdge('r0', 'r0m');
    g.setEdge('r1', 'r1m');
    g.setEdge('r0m', 'ra');
    g.setEdge('r1m', 'ra');

    g.setNode('gg', { id: 'gg', label: '00', ...labelNode });
    g.setNode('g0', { id: 'gg', label: '0', ...labelNode });
    g.setNode('g1', { id: 'gg', label: '0', ...labelNode });
    g.setNode('g0m', { label: '0 x 16', ...descriptionNode });
    g.setNode('g1m', { label: '0 x 1', ...descriptionNode });
    g.setNode('ga', { label: '0 + 0', ...descriptionNode });

    g.setEdge('gg', 'g0');
    g.setEdge('gg', 'g1');
    g.setEdge('g0', 'g0m');
    g.setEdge('g1', 'g1m');
    g.setEdge('g0m', 'ga');
    g.setEdge('g1m', 'ga');

    g.setNode('bb', { id: 'bb', label: '00', ...labelNode });
    g.setNode('b0', { id: 'bb', label: '0', ...labelNode });
    g.setNode('b1', { id: 'bb', label: '0', ...labelNode });
    g.setNode('b0m', { label: '0 x 16', ...descriptionNode });
    g.setNode('b1m', { label: '0 x 1', ...descriptionNode });
    g.setNode('ba', { label: '0 + 0', ...descriptionNode });

    g.setEdge('bb', 'b0');
    g.setEdge('bb', 'b1');
    g.setEdge('b0', 'b0m');
    g.setEdge('b1', 'b1m');
    g.setEdge('b0m', 'ba');
    g.setEdge('b1m', 'ba');

    dagre.layout(g);

    return {
        nodes: g.nodes().map((node) => g.node(node)),
        edges: g.edges().map((edge) => g.edge(edge)),
        graph: g.graph(),
    };
};

const { graph, edges, nodes } = createDag();

export default function App() {
    return (
        <Svg
            className="hexadecimal-red-diagram pa3"
            width={graph.width}
            height={graph.height}
            scale
            style={{ maxWidth: 800 }}>
            <MarkerTriangle id="my-marker-id" />
            {edges.map(({ points }, i) => {
                return <Polyline key={i} points={points.map((p) => Object.values(p))} stroke="#666" fill="none" markerEnd="url(#my-marker-id)" />;
            })}
            {nodes.map(({ x, y, width, height, label, id }, index) => {
                return (
                    <Rect className={`node ${id}`} key={index} cx={x} cy={y} width={width - 10} height={height}>
                        <Text oy={2} dominantBaseline="middle" textAnchor="middle" fill="#fff">
                            {label}
                        </Text>
                    </Rect>
                );
            })}
        </Svg>
    );
}