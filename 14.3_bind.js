const personOne = {
  name: "Alex",
  age: 23,
  info() {
    console.log(this.name, this.age);
  },
};

const personTwo = {
  name: "Bob",
  age: 35,
};

personOne.info(); // Alex 23
personOne.info.bind(personTwo)(); // Bob 35
