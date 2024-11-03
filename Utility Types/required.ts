// use of required make all defined varialbes required..

// use of required make all defined varialbes required..

interface Animal {
  name?: string;
  sound?: string;
}

type RequiredAnimal = Required<Animal>;
const dog: RequiredAnimal = {
    name: "Tom",
    sound: "Bark"           // here, everything need to declear..
};
console.log(dog);
