# webpack-tutorial
Following two Webpack tutorials by Valentino Gagliardi:

[The first one](https://www.valentinog.com/blog/babel/) is in the folder called `valentino`

[The second one](https://www.valentinog.com/blog/webpack/) is in the folder called -- wait for it! -- `valentino2`

Verdict: Good tutorials.  Nice and clear.  Despite the order in which I approached them I think `valentino` is an evolution of `valentino2`.  `valentino2` is a bit more thorough, showing how to get Webpack working with css and Vue and not just React, Babel, and HTML.

## Steps to packing your Web with Babel:
1. `npm init`
2. `npm i -D webpack webpack-cli`
3. Add `"build": "webpack --mode production"` and anything else needed to get started in `package.json`
 4. `npm i -D @babel/core babel-loader @babel/preset-env @babel/preset-react ...etc`
5. Create `webpack.config.js`.  See the repo for samples.
6. `npm i react react-dom` if React is what's up.
7. Create whatever directory structure is needed.
8. Fire it up!  `npm run build` It should be exporting files from `/src/` to `/dist/main.js`.  Don't forget `/src/index.js`!
9. `npm i -D html-webpack-plugin html-loader`
10. Update Webpack config to use html-loader and html-webpack-plugin.  See the repo for samples.
11. Create HTML in `./src/index.html`
12. Hook .js files into HTML using something like `document.getElementById`.
13. `npm i -D webpack-dev-server`
14. Add `"start": "webpack-dev-server --open --mode development"` to `package.json`
15. `npm start` and Robert's yer mother's brother.

  
