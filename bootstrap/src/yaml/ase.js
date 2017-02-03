var ase = require('ase-util');
var fs = require("fs");
var result = ase.read(fs.readFileSync("cux.ase"));
ase.formatAsLess(result);
console.log(ase.formatAsLess(result));

