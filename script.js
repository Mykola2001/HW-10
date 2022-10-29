"use strict";

function min(a, b) {
    return a < b ? a : b;
  }

let a = prompt("To calculate which number is lower write first number here");

a = Number(a)

let b = prompt("and here");

b = Number(b)

alert( min(a, b) );
