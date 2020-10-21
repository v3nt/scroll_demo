import _ from "lodash";
import * as d3 from "d3";

import { Init, display } from "./js/sections.js";
// window.display = display;
window.d3 = d3;
import "./scss/main.scss";
import "./css/style.css";
import "bootstrap";

function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  // Lodash, now imported by this script
  element.innerHTML = _.join(["APP 1. ", "Hello", "webpack"], " ");

  return element;
  console.log("component");
}

document.body.appendChild(component());

// load data and display
// d3.tsv("./data/words.tsv", display);
Init("init!");
window.onload = function () {
  // display();
  d3.tsv("./data/words.tsv").then((data) => {
    console.log("tsv data loaded");
    var thanksCSV = data;

    for (var i = 0; i < data.length; i++) {
      // console.log(data[i].word);
      // console.log(data[i].time);
    }
    display(data);
  });
};
