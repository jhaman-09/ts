/**
 * In TypeScript, a literal type is a type that has a specific, fixed value. 
 * Literal types allow you to specify an exact value a variable or parameter 
 * can have, such as a specific string, number, or boolean. This is useful
 * for creating more restrictive types that are precise and explicit.
 */

/**
 * Literal types are especially useful for creating discriminated unions,
 * configurations with a set of specific options, and function overloads
 * where parameters should only accept predefined values. By enforcing 
 * these exact values, TypeScript helps catch potential errors during 
 * development.
 */

let direction: "up" | "down" | "left";
direction = "down";
// direction = "right"  // wrong



type Greeting = "hello" | "Hey, How are you?" | 200;
function greet(greeting: Greeting) {
    console.log(greeting);
}

greet("hello")
greet(200)


// It work like enum or constant
// we can use it easily in redux action
