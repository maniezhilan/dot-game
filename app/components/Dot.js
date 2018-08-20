import React from 'react'
import PropTypes from 'prop-types'

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let start = false;

const Circle = ({x, y, bgColor}) => {
	let circleStyle = {
      padding:10,
      margin:20,
      backgroundColor: bgColor,
      borderRadius: "50%",
      width:10,
      height:10,
      position: "absolute",
      top: x,
      left: y
    };


	return (
      <div style={circleStyle}>
      </div>
    );
}

const Dot = () => {

	let colors = ["#393E41", "#E94F37", "#1C89BF", "#A1D363",
                 "#85FFC7", "#297373", "#FF8552", "#A40E4C"];
	let renderData = [];

	for (let i = 0; i < colors.length; i++) {
	  let color = colors[i];
	  renderData.push(<Circle key={i + color} bgColor={color} x={0} y={getRandomInt(1200)} />);
	}
	return (
		<div>
			{renderData}
		</div>
	)
}

export default Dot
