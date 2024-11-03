/**
 * after intilizing, we cannot override the values here. 
 * only read possible..
 */


interface Animal {
  name?: string;
  sound?: string;
}

type ReadOnlyAnimal = Readonly<Animal>;
const dog: ReadOnlyAnimal = {
    name: "Tommy",
    sound : "Bark"
}

console.log(dog);

// dog.name = "thor";       // it is not possible..