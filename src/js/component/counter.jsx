import React from "react";

//include images into your bundle

//create your first component
const Counter = (props) => {
	return (
	  <div className="counterTimer">
		<div className="calendar">
		<i className="far fa-clock"></i>
		</div>
		<div className="hoursTwo">{props.digitSix}</div>
		<div className="hoursOne">{props.digitFive}</div>
		<div className="minutesTwo">{props.digitFour}</div>
		<div className="minutesOne">{props.digitThree}</div>
		<div className="secondsTwo">{props.digitTwo}</div>
		<div className="secondsOne">{props.digitOne}</div>
	  </div>
	)
  }
  
  export default Counter
