import assert from 'assert';

import calculateEquation from "./../modules/calculateEquation.js";

assert.deepStrictEqual(calculateEquation(), 0);
assert.deepStrictEqual(calculateEquation(""), 0);
assert.deepStrictEqual(calculateEquation("1"), 1);
assert.deepStrictEqual(calculateEquation("1+1"), 2);
assert.deepStrictEqual(calculateEquation("1+2+3"), 6);
assert.deepStrictEqual(calculateEquation("3-1"), 2);
assert.deepStrictEqual(calculateEquation("3-2-1"), 0);
assert.deepStrictEqual(calculateEquation("3-2-1-3"), -3);
assert.deepStrictEqual(calculateEquation("3-2+1-3"), -1);

assert.deepStrictEqual(calculateEquation("1*1"), 1);
assert.deepStrictEqual(calculateEquation("1*2*3"), 6);
assert.deepStrictEqual(calculateEquation("3/1"), 3);
assert.deepStrictEqual(calculateEquation("3/1/3"), 1);
assert.deepStrictEqual(calculateEquation("3*2/6*7"), 7);

assert.deepStrictEqual(calculateEquation("13-2*6+8/4*2"), 5);







// assert.throws(calculateEquation("+"), { name: "SyntaxError", message: "Extra '+' found in equation"});



