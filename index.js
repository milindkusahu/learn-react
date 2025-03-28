// Infinite currying

function sum(a) {
  return function (b) {
    if (!b) {
      return a;
    }
    return sum(a + b);
  };
}

console.log(sum(1)(2)(1)(1)());
