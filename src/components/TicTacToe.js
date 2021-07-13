import React, { useState } from "react";
import ReactDOM from "react-DOM";

const style = {
  width: "10px",
  height: "50px",
  backgroundColor: "red",
  transform: "rotate(45deg)",
  zIndex: "1",
  position: "absolute",
  display: "inline",
};

const style2 = {
  width: "10px",
  height: "50px",
  backgroundColor: "red",
  transform: "rotate(-45deg) ",
  zIndex: "2",
};

const cross = {
  width: "40%",
  transform: "translateY(100%) translateX(35%)",
};

const outerCircle = {
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  backgroundColor: "blue",
  opacity: "0.5",
  position: "relative",
};

const innerCircle = {
  width: "70px",
  height: "70px",
  borderRadius: "50%",
  backgroundColor: "#f4f4f4",
  zIndex: "1",
  position: "absolute",
  left: "14.5%",
  bottom: "14.5%",
  right: "14.5%",
  top: "14.5%",
};

const board = {
  width: "300px",
  height: "300px",
  backgroundColor: "lightgrey",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
};

const quadrant = {
  height: "0px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const b1 = {
  borderRight: "5px solid",
  borderLeft: "5px solid",
};

const b2 = {
  borderTop: "5px solid",
  borderBottom: "5px solid",
};

const b3 = {
  borderTop: "5px solid",
  borderBottom: "5px solid",
};

const b4 = {
  borderRight: "5px solid",
  borderLeft: "5px solid",
};

const b5 = {
  border: "5px solid",
};

export const MakeCross = function () {
  return (
    <div style={cross}>
      <div style={style}></div>
      <div style={style2}></div>
    </div>
  );
};

export const MakeCircle = function () {
  return (
    <div style={outerCircle}>
      <div style={innerCircle}></div>
    </div>
  );
};
export const MakeBoard = function () {
  return (
    <div style={board}>
      <div data-box="1" style={quadrant}>
        {MakeCross()}
      </div>
      <div data-box="2" style={(quadrant, b1)}>
        {MakeCross()}
      </div>
      <div data-box="3" style={quadrant}></div>
      <div data-box="4" style={(quadrant, b2)}></div>
      <div data-box="5" style={(quadrant, b5)}></div>
      <div data-box="6" style={(quadrant, b3)}></div>
      <div data-box="7" style={quadrant}></div>
      <div data-box="8" style={(quadrant, b4)}></div>
      <div data-box="9" style={quadrant}></div>
    </div>
  );
};
