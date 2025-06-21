#!/usr/bin/node

const size = parseInt(process.argv[2]);
const char = process.argv[3] || 'X';

if (isNaN(size)) {
  console.log('Missing size');
} else {
  for (let i = 0; i < size; i++) {
    console.log(char.repeat(size));
  }
}