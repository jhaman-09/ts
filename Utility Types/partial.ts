/**
 * In TypeScript, the Partial utility type is used to make all properties of a given type 
 * optional. This is especially useful when you want to work with a subset of properties 
 * from an object type, without needing to specify every property.
 * 
 * it will add one more type of the variable..
 */

interface Animal {
    name: string;
    sound: string;
}

type partialAnimal = Partial<Animal>;           // use partial => make variable required or unrequired
const dog: partialAnimal = {
    name: "puppy",
}
console.log(dog);

// with this we can make partial variable requeired or unrequired..