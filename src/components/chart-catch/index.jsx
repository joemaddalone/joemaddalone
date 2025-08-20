import React, { useRef, useState, useLayoutEffect } from "react";
import Path, { Svg, Rect } from "react-svg-path";
import "./index.css";
import CharSpinner from "./CharSpinner";

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const CharSpinners = ({ str, color }) => (
  <div className="spinners-holder">
    {str.split("").map((char, i) => (
      <CharSpinner key={i} char={char} color={color} />
    ))}
  </div>
);

export const ChartCatch = () => {
  const canvas = {
    width: 650,
    height: 300,
  };

  const data = Array.from({ length: canvas.width / 6 - 1 }, () =>
    random(100, 999)
  ).sort((a, b) => a - b);

  const canvasRef = useRef(null);

  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [gridset, setGridset] = useState(null);
  const [offScreenImage, setOffScreenImage] = useState(null);
  const [hitBoxes, setHitBoxes] = useState([]);
  const [highlightPath, setHighlightPath] = useState("");
  const [infoBox, setInfoBox] = useState("");

  useLayoutEffect(() => {
    const offscreenCanvas = document.createElement("canvas");
    const offscreenCtx = offscreenCanvas.getContext("2d");
    offscreenCanvas.width = canvasRef.current.width;
    offscreenCanvas.height = canvasRef.current.height;
    offscreenCtx.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
    offscreenCtx.fillStyle = "transparent";
    offscreenCtx.fillRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );

    offscreenCtx.fillStyle = "#ccc8";
    data.forEach((d, i) => {
      const bottom = offscreenCanvas.height;
      const hb = { x: i * 6 + 6, y: bottom - d / 4, w: 4, h: d / 4, value: d };
      offscreenCtx.fillRect(hb.x, hb.y, hb.w, hb.h);
      setHitBoxes((prev) => [...prev, hb]);
    });
    setOffScreenImage(offscreenCanvas);
    canvasRef.current
      .getContext("2d")
      .drawImage(
        offscreenCanvas,
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );
  }, []);

  const handleMouseOut = () => {
    setHighlightPath("");
    setInfoBox("");
  };

  const handleMouseMove = (e) => {
    const ctx = canvasRef.current.getContext("2d");
    const rect = canvasRef.current.getBoundingClientRect();

    const x = e?.touches ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const y = e?.touches ? e.touches[0].clientY - rect.top : e.clientY - rect.top;
    const hitBox = hitBoxes.find((b) => {
      return b.x <= x && b.x + b.w >= x;
    });
    if (hitBox) {
      setHighlightPath(
        <Rect
          width={hitBox.w}
          height={hitBox.h}
          cx={hitBox.x + hitBox.w / 2}
          cy={hitBox.y + hitBox.h / 2}
          className="highlight"
        />
      );
      const info = {
        x: x + 25,
        y: y - 60,
        w: 100,
        h: 100,
      };
      setInfoBox(
        <div className="infobox" style={{ top: info.y, left: info.x }}>
          <CharSpinners str={hitBox.value.toString()} color="#fff" />
        </div>
      );
    }
  };

  return (
    <div
      style={{
        position: "relative",
        width: `${canvas.width}px`,
        height: `${canvas.height}px`,
      }}
    >
      <canvas
        style={{ position: "absolute", top: 0, left: 0 }}
        width={canvas.width}
        height={canvas.height}
        ref={canvasRef}
        onMouseMove={handleMouseMove}
        onMouseOut={handleMouseOut}
        onTouchStart={handleMouseMove}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseOut}
      />
      <Svg
        style={{
          pointerEvents: "none",
          position: "absolute",
          top: 0,
          left: 0,
          background: "transparent",
        }}
        width={canvas.width}
        height={canvas.height}
        viewBox={`0 0 ${canvas.width} ${canvas.height}`}
      >
        {highlightPath}
      </Svg>
      {infoBox}
    </div>
  );
};

export default ChartCatch;
