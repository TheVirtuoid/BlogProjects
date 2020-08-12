import assert from 'assert';

import calculateEquation from "./../modules/calculateEquation.js";

assert.deepStrictEqual(calculateEquation(), null);
assert.deepStrictEqual(calculateEquation(""), null);
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

assert.throws( () => calculateEquation("+"), { name: "SyntaxError", message: "Too few numbers to perform operation"});
assert.throws( () => calculateEquation("-"), { name: "SyntaxError", message: "Too few numbers to perform operation"});
assert.throws( () => calculateEquation("*"), { name: "SyntaxError", message: "Too few numbers to perform operation"});
assert.throws( () => calculateEquation("/"), { name: "SyntaxError", message: "Too few numbers to perform operation"});

assert.throws( () => calculateEquation("1+"), { name: "SyntaxError", message: "Too few numbers to perform operation"});
assert.throws( () => calculateEquation("1-"), { name: "SyntaxError", message: "Too few numbers to perform operation"});
assert.throws( () => calculateEquation("1*"), { name: "SyntaxError", message: "Too few numbers to perform operation"});
assert.throws( () => calculateEquation("1/"), { name: "SyntaxError", message: "Too few numbers to perform operation"});

assert.throws( () => calculateEquation("1/0"), { name: "SyntaxError", message: "Division by zero"});

assert.throws( () => calculateEquation(")"), { name: "SyntaxError", message: "Mismatch parenthesis"});
assert.throws( () => calculateEquation("("), { name: "SyntaxError", message: "Mismatch parenthesis"});

assert.deepStrictEqual(calculateEquation("()"), null);
assert.deepStrictEqual(calculateEquation("(1+1)+2"), 4);
assert.deepStrictEqual(calculateEquation("(1-1)+2"), 2);
assert.deepStrictEqual(calculateEquation("1-(1+2)"), -3);
assert.deepStrictEqual(calculateEquation("(1-1)*2"), 0);












