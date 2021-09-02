"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var main = document.querySelector('#main');
var arr = [1, 2, 3, 4];
var str = "";

for (var _i = 0, _arr = arr; _i < _arr.length; _i++) {
  var item = _arr[_i];
  str += "<p>".concat(item, "</p>");
}

main.innerHTML = str;

var Person = /*#__PURE__*/function () {
  function Person(name, age) {
    _classCallCheck(this, Person);

    this.name = name;
    this.age = age;
  }

  _createClass(Person, [{
    key: "sayHi",
    value: function sayHi() {
      console.log("Hi ".concat(this.name));
    }
  }]);

  return Person;
}();

var billy = new Person('Billy', 29);
billy.sayHi();