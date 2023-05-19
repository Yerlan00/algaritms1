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

function apply(fn, context, rest) {
  const uniqId = Date.now().toString() + Math.random();
  context[uniqId] = fn;
  const result = context[uniqId](...rest);
  delete context[uniqId];
  return result;
}

apply(info, personOne, ["+5200", "alex@gmail.com"]);
console.log("------------------------");
apply(info, personTwo, ["+5300", "bob@gmail.com"]);

// Alex info:
//   Name: Alex
//   Age: 32
//   Job: Frontend
//   Phone: +5200
//   Email: alex@gmail.com
// --------------------
// Bob info:
//   Name: Bob
//   Age: 35
//   Job: Backend
//   Phone: +5300
//   Email: bob@gmail.com
