import React from "react";
import PropTypes from 'prop-types';
import { Circle } from "react-svg-path";
import { animated, useSpring } from "react-spring";
import "./launcher.css";

const Transition = ({ color, width, completed }) => {
  const AnimatedShape = animated(Circle);
  const spring = useSpring({
    from: { size: 0, },
    to: { size: width * 5,},
    config: { duration: 400 },
    onRest: completed,
  });

  return <AnimatedShape cx={-100} cy={-100} fill={color} size={spring.size} />;
};

Transition.propTypes = {
	color: PropTypes.string,
	width: PropTypes.number,
	completed: PropTypes.func,
};

export default Transition;
