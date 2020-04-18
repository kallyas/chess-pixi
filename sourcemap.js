var generate = require('generate-source-map');
var fs = require('fs');

var file = {
  source: fs.readFileSync('./pixi/pixi.min.js'),
  sourceFile: './pixi/pixi.min.js'
};

var map = generate(file);

console.log(map.toString());