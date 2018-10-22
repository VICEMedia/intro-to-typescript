// TypeScript input
interface Greeting {
  name: string;
  greet: () => void;
}

class SayHello implements Greeting {
  name: string;

  constructor(name) {
    this.name = name;
  }

  greet = () => {
    console.log(`Hello, ${this.name}`);
  }
}
const greetEveryone = new SayHello('World');
greetEveryone.greet();

// JavaScript output
class SayHello {
  constructor(name) {
      this.greet = () => {
          console.log(`Hello, ${this.name}`);
      };
      this.name = name;
  }
}
const greetEveryone = new SayHello('World');
greetEveryone.greet();
