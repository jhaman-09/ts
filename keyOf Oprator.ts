/**
 * The keyof operator in TypeScript is used to get a union of all the keys in a given type. 
 * This operator is helpful for creating types that are limited to the keys of another type, 
 * providing a type-safe way to refer to the keys of an object or interface.
*/

// syntax :
 type Keys = keyof SomeType;


interface Person {
  name: string;
  age: number;
  location: string;
}

type PersonKeys = keyof Person;  // "name" | "age" | "location"
let m: PersonKeys = "age";
console.log(m);
