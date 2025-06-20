#!/usr/bin/node
const myModule = require('./myVar');

const myObject = {
  type: 'object',
  value: myModule.myVar
};

console.log(myObject);