import React from "react";
import PropTypes from "prop-types";
import {
  RoundedSquare,
  Line,
  MarkerTriangle,
  Rect,
  Text,
} from "react-svg-path";
import { useSpring, animated } from "react-spring";
import "./launcher.css";

const SocialButton = ({ cx, cy, ox, offset, control }) => {
  const [activated, setActivated] = React.useState(null);
  const [flag, setFlag] = React.useState(null);
  const tx = cx + ox - offset;
  const sqSize = 40;
  const bannerDist = 45;

  const clear = () => {
    setActivated(null);
  };

  const activator = (control) => {
    const controlSetter = { ...control, cx: tx + ox, cy };
    return {
      onMouseOver: () => setActivated(controlSetter),
      onFocus: () => setActivated(controlSetter),
      onMouseOut: clear,
      onBlur: clear,
    };
  };

  const { x } = useSpring({
    config: { duration: activated ? 800 : 400 },
    to: { x: activated ? 0 : 360 },
    from: { x: activated ? 360 : 0 },
  });

  const { l } = useSpring({
    config: { duration: activated ? 200 : 0 },
    to: { l: activated ? 0 : bannerDist },
    from: { l: activated ? bannerDist : 50 },
    delay: activated ? 400 : 0,
    onRest: () => setFlag(activated),
  });
  return (
    <>
      {flag ? (
        <MarkerTriangle id="my-marker-id" color={activated?.color} />
      ) : null}
      <g className="flourish" transform={`translate(${tx}, ${cy})`}>
        <animated.g className="control-box" strokeDashoffset={x}>
          <a href={control.url}>
            <RoundedSquare
              tabIndex={0}
              cx={ox}
              cy={0}
              radius={6}
              size={sqSize}
              stroke={control.color}
              fill="transparent"
              {...activator(control)}
            />
          </a>
        </animated.g>
        <use
          x={ox - 12}
          y={-12}
          xlinkHref={`#${control.id}`}
          style={{ fill: activated ? control.color : "#222" }}
        />
      </g>
      {activated ? (
        <animated.g className="control-box-banner" strokeDashoffset={l}>
          <Line
            className="control-box-banner"
            sx={activated.cx}
            sy={activated.cy + 20}
            ey={activated.cy + bannerDist}
            ex={activated.cx}
            stroke={activated.color}
            strokeDasharray={bannerDist}
            markerEnd="url(#my-marker-id)"
          >
            {flag ? <g /> : null}
          </Line>
          <Line
            className="control-box-banner"
            sx={activated.cx}
            sy={activated.cy - 20}
            ey={activated.cy - 30}
            ex={activated.cx}
            stroke={activated.color}
            strokeDasharray={bannerDist}
          />
        </animated.g>
      ) : null}
      {flag && activated ? (
        <Rect
          className="flag"
          cy={activated.cy + bannerDist + 10}
          cx={activated.cx}
          width={80}
          height={25}
          fill="none"
        >
          <Text className="middle">{activated.msg}</Text>
        </Rect>
      ) : null}
    </>
  );
};

SocialButton.propTypes = {
  cx: PropTypes.number,
  cy: PropTypes.number,
  ox: PropTypes.number,
  oy: PropTypes.number,
  offset: PropTypes.number,
  control: PropTypes.object,
};

export default SocialButton;
