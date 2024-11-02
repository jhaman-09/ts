// Used where we donot confirm that which type of datatype will come but we can conclude that as this type of data can come..

const route = {
    params: 2
}

const value = route.params as number;


// 1st way
// here, someValue is any type
let someValue: any = "This is a string";
// and here, deciding that is string type
let strLength: number = (someValue as string).length;

// 2nd Way
let strLength2: number = (<string>someValue).length;
console.log(strLength2);

/**
 * In Typescript, Type assertion is a technique that informs the compiler 
 * about the type of a variable. Type assertion is similar to typecasting 
 * but it doesn’t reconstruct code. You can use type assertion to specify
 * a value’s type and tell the compiler not to deduce it. When we want to 
 * change a variable from one type to another such as any to number etc, we
 * use Type assertion. 
 */