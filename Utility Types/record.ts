/***
 * In TypeScript, the Record utility type is used to create an object type with specific 
 * keys and values. It’s particularly helpful when you need a strongly-typed object structure 
 * where all keys are known, but the properties might vary in value type.
 */


interface Animal {
  name?: string;
  sound?: string;
}

type RecordAnimal = Record<Animal>;
const dog: RecordAnimal = {
  name: "Tommy",
  sound: "Bark",
};

console.log(dog);



type Address = {
  city: string;
  country: string;
};

type Users = Record<string, Address>;
const userAddresses: Users = {
  alice: { city: "Paris", country: "France" },
  bob: { city: "London", country: "UK" },
};


console.log(userAddresses);
