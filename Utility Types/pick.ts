/**The Pick utility type in TypeScript is used to create a new type by selecting specific 
 * properties from an existing type. This is helpful when you only need a subset of 
 * properties from a larger type, allowing you to narrow down complex types to only the 
 * fields you need. 
 * 
 */

interface Animal {
  name?: string;
  sound?: string;
}


type nameOnly = Pick<Animal, "name">;
let cat: nameOnly = {
    name: "Billi",
}

console.log(cat);

/** we can create a single datatype from Animal */ 