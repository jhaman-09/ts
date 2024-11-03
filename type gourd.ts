/**
 * It allows us to create more specific type checks..
 * A type guard in TypeScript is a way to narrow down the type of a variable within a
 * conditional block. Type guards let TypeScript know more about the type of a variable,
 * providing better type safety and avoiding type-related errors. This is especially useful
 * in scenarios involving union types or when working with types that have similar structures.
 */

function isString(value: any): value is string {
  return typeof value === "string";
}

function checking(value: string | number) {
  if (isString(value)) {
    console.log("Yes bro! it is a string");
  } else {
    console.log("Not a String..");
  }
}
checking(2);


function logValue(value: string | number) {
  if (typeof value === "string") {
    console.log("It's a string:", value.toUpperCase());
  } else {
    console.log("It's a number:", value.toFixed(2));
  }
}
logValue(4)

