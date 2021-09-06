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