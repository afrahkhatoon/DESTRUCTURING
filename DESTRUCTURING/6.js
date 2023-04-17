/*
6. Nested Objects.
Write a function that takes an object representing a person as input, and extracts the name and street
properties from a nested object using object destructuring. The function should return an object with these two
properties. A sample object is given below.

const person = {
  name: "Afrah",
  age: 26,
  address: {
    street: "Ranchi Road",
    city: "Ranchi",
    state: "Jharkhnad",
  },
};

*/


const person = {
    name: "Afrah",
    age: 19,
    address: {
      street: "7 Tombs Road",
      city: "Hyderabad",
      state: "Telangana",
    },
  };

  // code for destructuring

  function nestedObjects({name, address: {street }}){
    return ({name, street});
  }

  let { name, street } = nestedObjects(person);

  console.log(name);
  console.log(street);