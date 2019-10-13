import _ from "lodash";

function component() {
  const element = document.createElement("div");

  // Add a little Lodash
  element.innerHTML = _.join(["Hello", "Dave!"], " ");

  return element;
}

document.body.appendChild(component());
