const personOne = {
  name: "Alex",
  age: "32",
  job: "Frontend",
};
const personTwo = {
  name: "Bob",
  age: "35",
  job: "Backend",
};

function info(phone, email) {
  console.group(`${this.name} info:`);
  console.log(`Name: ${this.name}`);
  console.log(`Age: ${this.age}`);
  console.log(`Job: ${this.job}`);
  console.log(`Phone: ${phone}`);
  console.log(`Email: ${email}`);
  console.groupEnd();
}

function bind(fn, context, ...rest) {
  return function (...args) {
    return fn.apply(context, [...rest, ...args]);
  };
}

bind(info, personOne)("+5800", "alex@gmail.com");
console.log("------------------------");
bind(info, personTwo)("+5500", "b@gmail.com");

// Alex info:
//   Name: Alex
//   Age: 32
//   Job: Frontend
//   Phone: +5800
//   Email: alex@gmail.com
// ------------------------
// Bob info:
//   Name: Bob
//   Age: 35
//   Job: Backend
//   Phone: +5500
//   Email: b@gmail.com
