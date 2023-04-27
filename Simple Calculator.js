class Arithmetic {
  constructor(value) {
    this.value = value;
  }

  add(number) {
    this.value += number;
    return this;
  }

  subtract(number) {
    this.value -= number;
    return this;
  }

  multiply(number) {
    this.value *= number;
    return this;
  }

  divide(number) {
    this.value /= number;
    return this;
  }
}

const two = new Arithmetic(2);
// console.log(two.add(5).value); // Output: 7
console.log(two.multiply(10).subtract(5).value); // Output: 15
