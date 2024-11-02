// Regular Function
function add(a: number, b: number): number {
  return a + b;
}

// function expression
const multi = function multiply(a: number, b: number): number {
  return a * b;
};

//Arrow Function
const subtract = (a: number, b: number): number => {
  return a - b;
};

// Optional Parameter
function greet(name?: string, greeting?: string): string {
  return greeting ? `${greeting}, ${name}` : `Hello. ${name}`;
}

// Default Parameter
function greetMe(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}`;
}

// Rest Parameter
function Addtion(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

// Define function Type
type Operation = (a: number, b: number) => number;
const added: Operation = (a, b) => a + b;
const subtracted: Operation = (a, b) => a - b;
const multiplied: Operation = (a, b) => a * b;
const divided: Operation = (a, b) => a / b;

console.log(multiplied(2,5));

console.log(Addtion(1, 2, 3));
console.log(Addtion(1, 2, 3, 4, 5, 6, 7, 8));

console.log(greetMe("Aj"));

console.log(greet("Aman"));
console.log(greet("Aman", "welcome to ts"));

console.log(subtract(10, 5));
console.log(multi(4, 2));
console.log(add(5, 6));
