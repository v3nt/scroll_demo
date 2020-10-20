import _ from "lodash";
import "./scss/main.scss";
import "./css/style.css";
import "bootstrap";

import d3 from "d3";

function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  // Lodash, now imported by this script
  element.innerHTML = _.join(["APP 21. ", "Hello", "webpack"], " ");

  return element;
  console.log("component");
}

document.body.appendChild(component());
