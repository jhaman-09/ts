/**
 * In TypeScript, an alias is a way to create a custom name for a type using the type 
 * keyword. Type aliases allow you to define complex types and give them a more readable, 
 * reusable name. Aliases can be used for basic types, unions, intersections, function 
 * signatures, and more.
*/

// Basic Syntax :
//* type AliasName = existingType;


type userId = object | string;
let userId: userId = "abc";

console.log(userId);
