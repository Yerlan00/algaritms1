// Своя функция bind
// Реализуйте функцию bind
// Input: Object, arguments
// Output: function

Function.prototype.myBind = function (context, ...args) {
  return (...rest) => {
    return this.call(context, ...args, ...rest);
  };
};

function log(...props) {
  console.log(this.name, this.age, ...props);
}

const personOne = {
  name: "Alex",
  age: "32",
};
const personTwo = {
  name: "Bob",
  age: "35",
};

log.myBind(personOne, "+54003002010")(); // Alex 32 +54003002010
log.myBind(personTwo, "bob@gmail")(); // Bob 35 bob@gmail
