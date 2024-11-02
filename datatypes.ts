let a: number = 10;
console.log(a);



let b: string = "hello Aman!";
console.log(b);




let arr: number[] = [1, 2, 3, 4];
console.log(arr);




let brr: string[] = ["aman", "raman", "chaman"];
console.log(brr);




// let bigInt: bigint = 12345678912n;
// console.log(bigInt);




let user: object = {
  name: "Aman",
  age: 20,
};
//      or
let user1: { name: string; age: number } = {
  name: "Aman Kumar",
  age: 22,
};
console.log(user);
console.log(user1);




let undefinedval: undefined = undefined;
console.log(undefinedval);




// tuple are hetrogenious in nature
let tupleArray: [number, boolean, object] = [
  102,
  true,
  { name: "hello Aman!", age: 20 },
];
console.log(tupleArray);




let Nullu: null = null;
console.log(Nullu);




enum Color {
  primary = "Pink",
  secondary = "Yellow",
}
console.log(Color);
let myColor: Color = Color.primary;
console.log(myColor);




let anyThing: any = "here, store anything!!";
console.log(anyThing);
anyThing = 2;
console.log(anyThing);


// Never
// Unknown
// Void
