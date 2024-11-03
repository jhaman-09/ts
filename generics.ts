/**
 * ->  Generics is the typescript powerful feature which allows us
 * to recreate, reusable and flexiable components......
 * ->  We can create components which can work with any datatype while still
 * maintaining the type information..
 */

// Syntax
function identity<T>(arg: T): T {
  return arg;
}

// Here "T" can be any type of datatype

let numberType = identity<number>(29);
let stringType = identity<string>("Aman Kumar Jha");

console.log(stringType);
console.log(numberType);




/** Generics in Class */
interface Pair<T, U> {
  first: T;
  second: U;
}

let numStringPair: Pair<number, string> = {
    first: 1,
    second: "Hello One!"
};

let boolStringPair: Pair<boolean, string> = {
    first: true,
    second : "Hello bool, how are you!"
}

console.log(numStringPair);
console.log(boolStringPair);



/** creating a stack with generic class */

class Stack<T> {
    private items: T[] = [];
    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }
}

// Number Stack
const numStack = new Stack<number>();
numStack.push(20);
numStack.push(40);
numStack.push(50);
numStack.push(70);
console.log(numStack);
