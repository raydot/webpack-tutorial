import _ from "lodash";
import "./style.css";
import Icon from "./icon.jpg";
import Data from "./data.xml";

function component() {
  const element = document.createElement("div");

  // Add a little Lodash
  element.innerHTML = _.join(["Hello", "Dave!<br />"], " ");
  element.classList.add("hello");

  // Add the image to our existing div.
  // check out image-webpack-loader and url-loader for more
  // information on enhancing the image loading process.
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  // output that xml as JSON
  console.log(Data);

  return element;
}

document.body.appendChild(component());
