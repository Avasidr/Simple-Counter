//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Counter from "./component/counter.jsx";

//render your react application
let counter = 0;
setInterval(function () {
    const secondsOne = Math.floor(counter/1);
    const secondsTwo = Math.floor(counter/10);
    const minutesOne = Math.floor(counter/100);
    const minutesTwo = Math.floor(counter/1000);
    const hoursOne = Math.floor(counter/10000);
    const hoursTwo = Math.floor(counter/100000);
    counter ++;

    ReactDOM.render(<Counter digitOne={secondsOne % 10} digitTwo={secondsTwo % 10} digitThree={minutesOne % 10} digitFour={minutesTwo % 10} digitFive={hoursOne % 10} digitSix={hoursTwo % 10} />, document.querySelector("#app"));
},1000)

