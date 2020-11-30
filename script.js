let calc = {

  read() {
    this.a = +prompt("Enter a", "0");
    this.b = +prompt("Enter b", "0");
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  }
};

calc.read();
alert( calc.sum() );
alert( calc.mul() );