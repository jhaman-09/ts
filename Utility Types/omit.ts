/**
 * The Omit utility type in TypeScript is used to create a new type by excluding specific 
 * properties from an existing type. This is particularly useful when you want most properties 
 * from a type but need to remove a few that aren’t relevant in a particular context.
 */

interface Animal {
  name?: string;
  sound?: string;
  color: string;
}

type omitOnly = Omit<Animal, "name">;

// from Animal interface, the name type variable is filtered/ommited..
let cat: nameOnly = {
  name: "Billi",        // so, we cannot able to access the name type variable..
};


/** Except name type, we are able to access all the remaining variables.. */

console.log(cat);
