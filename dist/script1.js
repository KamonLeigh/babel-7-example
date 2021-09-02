"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var foo = "foo";
console.log("HELLO ".concat(foo, "!!"));

var Bork = function Bork() {
  var _this = this;

  _classCallCheck(this, Bork);

  _defineProperty(this, "instanceProperty", "bork");

  _defineProperty(this, "boundFunction", function () {
    return _this.instanceProperty;
  });
};

_defineProperty(Bork, "staticProperty", "babelIsCool");

_defineProperty(Bork, "staticFunction", function () {
  return Bork.staticProperty;
});

var myBork = new Bork(); //Property initializers are not on the prototype.

console.log(myBork.__proto__.boundFunction); // > undefined
//Bound functions are bound to the class instance.

console.log(myBork.boundFunction.call(undefined)); // > "bork"
//Static function exists on the class.

console.log(Bork.staticFunction()); // > "babelIsCool"

var budget = 1000000000000;
var bar = 'test';