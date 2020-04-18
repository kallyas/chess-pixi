var generate = require('generate-source-map');
var fs = require('fs');

var file = {
  source: fs.readFileSync('./pixi/pixi.min.js'),
  sourceFile: './pixi/pixi.min.js'
};

var map = generate(file);

fs.writeFile('./pixi/pixi.min.js.map', map.toString(), function (err) {
  if (err) throw err;
  console.log('File is created successfully.');
});  

console.log(map.toString());