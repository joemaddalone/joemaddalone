import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { motion, useSpring } from "motion/react";
import "./CharSpinner.css";

const CharSpinner = ({ char, color }) => {
  const chars = "0123456789".split("");

  const top = useSpring(0, {
    type: "spring",
    stiffness: 500,
    damping: 50
  });

  useEffect(() => {
    top.set(chars.indexOf(char) * 55 * -1);
  }, [char]);

  return (
    <div className="tiles">
      <div className="tile">
        <motion.div style={{ top: top }} className="char-holder">
          {chars.map((c) => {
            const active = c === char;
            const tileClass = `tile-char ${active ? "active" : ""}`;
            const style = { color };
            return (
              <div style={style} key={c} className={tileClass}>
                {c}
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

CharSpinner.propTypes = {
  char: PropTypes.string,
  color: PropTypes.string,
};

export default CharSpinner;
