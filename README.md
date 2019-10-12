# webpack-tutorial
Following two Webpack tutorials by Valentino Gagliardi:

[The first one](https://www.valentinog.com/blog/babel/) is in the folder called `valentino`

[The second one](https://www.valentinog.com/blog/webpack/) is in the folder called -- wait for it! -- `valentino2`

Verdict: Good tutorials.  Nice and clear.  Despite the order in which I approached them I think `valentino` is an evolution of `valentino2`.  `valentino2` is a bit more thorough, showing how to get Webpack working with css and Vue and not just React, Babel, and HTML.

## Steps to packing your Web with Babel:
<ol>
  <li>`npm init`</li>
  <li>`npm i -D webpack webpack-cli`</li>
  <li>Add `"build": "webpack --mode production"` and anything else needed to get started in `package.json`</li>
  <li>`npm i -D @babel/core @babel/preset-env @babel/preset-react ...etc`</li>
  <li>Create `webpack.config.js`.  See the repo for samples.</li>
  <li>`npm i react react-dom` if React is what's up</li>
  <li>Create whatever directory structure is needed.</li>
  <li>Fire it up!  It should be exporting files to `.dist/main.js`</li>
  *** IF YOU NEED IT IN A WEB PAGE ***
  <li>`npm i -D html-webpack-plugin html-loader`</li>
  <li>Update Webpack config to use html-loader and html-webpack-plugin.  See the repo for samples.</li>
  <li>Create HTML in `./src/index.html`</li>
  <li>Hook .js files into HTML using something like `document.getElementById`.</li>
  *** WEBPACK DEV SERVER ***
  <li>npm i -D webpack-dev-server</li>
  <li>Add `"start": "webpack-dev-server --open --mode development"` to `package.json`</li>
  <li>`npm start` and Robert's yer mother's brother.</li>
</ol>
  
