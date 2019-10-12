import App from "./App";

// this creates a Webpack entry point.
// It expects to see src/index.js
console.log(`Entry point, WOOT!`);

// Rip some ES6
const arr = [1, 2, 3];
const iAmJSES6 = () => console.log(...arr);
window.iAmJSES6 = iAmJSES6;
