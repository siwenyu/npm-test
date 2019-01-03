const config = require("config");

const USER = process.env.USER;
var color = require('colors-cli')

console.log(process.version);
console.log(process.env.npm_package_engines_node);
console.log('hi~' + USER + ',你在上线~~');
console.warn(color.red('hi~' + USER + ',你在上线~~'));