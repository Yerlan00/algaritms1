const personOne = {
  name: "Alex",
};
const personTwo = {
  name: "Bob",
};

function info(...props) {
  console.log(this.name, ...props);
}

function call(fn, context, ...rest) {
  const uniqId = Date.now().toString() + Math.random();
  context[uniqId] = fn;
  const result = context[uniqId](...rest);
  delete context[uniqId];
  return result;
}

call(info, personOne, "phone: +5600", "email: alex@gmail.com"); // Alex phone: +5600 email: alex@gmail.com
call(info, personTwo, "phone: +5400", "email: b@gmail.com"); // Alex phone: +5600 email: alex@gmail.com
