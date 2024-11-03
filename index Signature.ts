/**
 * In TypeScript, an index signature allows you to define types for the keys and values of 
 * an object when you don’t know the exact property names ahead of time. It’s especially 
 * useful for objects where the properties are dynamically determined, like dictionaries or 
 * maps.
 */

// Syntax : 
interface Example {
  [key: string]: string;
}




interface stringArray {
    [index : number] :string
}

let myArray: stringArray;
myArray = ["Ritika", "Rohit"];

let myStr: string = myArray[0];
console.log(myStr);




interface NumberDictionary {
  [key: string]: number;
}

const scores: NumberDictionary = {
  alice: 85,
  bob: 92,
  charlie: 78,
};
console.log(scores);
