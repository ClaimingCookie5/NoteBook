// Branch out and add your matchers here

(function() {
  window.describe_block_tag = "";

  function describe (description, callback) {
    // This is deliberately global
    window.describe_block_tag = description;

    callback();
  }

  function expect(actual) {
    return {
      toEqual: function (expected) {
        if (actual === expected) {
          console.log(".");
        } else {
          let block_tag = window.describe_block_tag ? window.describe_block_tag : "";
          console.log(`${block_tag}: expected ${actual} to equal ${expected}`);
        }
      }
    }
  }
})

function expect(actual) {
  return {
    toEqual: function (expected) {
      if(actual === expected) {
        console.log(".") 
      } else {
        throw new Error(`expected ${actual} to equal ${expected}`)
      }
    },
    notToEqual: function (expected) {
      if(actual !== expected) {
        console.log(".")
      } else {
        throw new Error(`expected ${actual} to equal ${expected}`)
      }
    },
    toHaveSize: function (expected) {
      if(actual.length === expected) {
        console.log(".")
      } else {
        throw new Error(`expected ${actual} to equal ${expected}`)
      }
    }
  }
}
(function () {
  var describe_tag = '';

  function describe(description, callback) {
    describe_tag = description;
    callback();
  }

  function it(descriotion, callback) {
    try {
      callback();
    } catch (error) {
      console.log(
        `${describe_tag || ''}: ${description} failed with error: ${
          error.message
        }`
      );
    }
  }

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
    };
  }

  describe('Note', () => {
    it('checks if value is in array', () => {
      expect([1, 3, 7]).toContain(3);
    });
  });
})();
// check 'actual' is in the array by iterating to find the value
// return message if value is found
// return message if value is not found
