// Branch out and add your matchers here
// (function () {

// var describe_tag = '';

// function describe(description, callback) {
//   describe_tag = description;
//   callback();
// }

// function it(description, callback) {
//   try {
//     callback();
//   } catch (error) {
//     console.log(
//       `${describe_tag || ''}: ${description} failed with error: ${
//         error.message
//       }`
//     );
//   }
// }

function expect(actual) {
  return {
    toContain: function (expected) {
      check = actual.includes(expected);
      if (check === true) {
        console.log(`${expected} exists in array`);
      } else {
        throw new Error(`${expected} does not exist in array`);
      }
    },
    toEqual: function (expected) {
      if (actual === expected) {
        console.log('.');
      } else {
        throw new Error(`expected ${actual} to equal ${expected}`);
      }
    },
    notToEqual: function (expected) {
      if (actual !== expected) {
        console.log('.');
      } else {
        throw new Error(`expected ${actual} to equal ${expected}`);
      }
    },
    toHaveSize: function (expected) {
      if (actual.length === expected) {
        console.log('.');
      } else {
        throw new Error(`expected ${actual} to equal ${expected}`);
      }
    },
    toBeInstanceOf: function (expected) {
      if (actual instanceof expected) {
        console.log('.');
      } else {
        throw new Error(`expected ${actual} to be an instance of ${expected}`);
      }
    },
  };
}
