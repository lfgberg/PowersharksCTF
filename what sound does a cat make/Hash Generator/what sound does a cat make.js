//  Import Libs
const MeowHash = require('meow-hash-node');
const fs = require('fs');

var text = fs.readFileSync("waifus.txt").toString();
var waifus = text.split("\r\n").filter(content => content !== '');
console.log(waifus);
var output = [];

//  Hash em out
  for (var i = 0; i < waifus.length; i++) {
    var buffer = Buffer.from(waifus[i]);
    var hash = MeowHash.CreateHash(buffer).toString().toLowerCase().replace("\u0000", "").replace(/-/g,"");
    output.push([waifus[i], hash]);
  }

console.log(output);
