/**
 * In TypeScript, modules help organize code by separating it into smaller, reusable pieces. 
 * Modules enable you to encapsulate functionality and avoid naming conflicts by isolating 
 * the scope of variables, functions, and classes. Each module in TypeScript is essentially
 * a file, and anything exported from a module can be imported into another file.

 ** Key Concepts of TypeScript Modules
 -> Exporting: Declaring parts of a module that should be accessible from other modules.
 -> Importing: Using features from other modules in the current module.
 -> Default Exports: A single, primary export per module.
 -> Named Exports: Multiple exports from a single module, with explicit names.
 */

 // create a file with mathUtils.ts
export function add(a: number, b: number): number {
    return a + b;
}

export function multiply(a: number, b: number): number {
    return a * b;
}

export const PI: number = 3.14;

export default function greet(name: string): string {
  return `Hello, ${name}!`;
}




// create another file with useModule.ts
import * as MathUtils from "./mathUtils.ts"

// named imports:
import { add, multiply } from "./mathUtils";
import { PI } from "./mathUtils";

// default imports
import greet from "./mathUtils";


console.log(add(2, 3)); // Output: 5
console.log(multiply(2, 3)); 