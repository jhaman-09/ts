/**
 * 
* In TypeScript, decorators are special functions that can be applied to classes, methods, 
* properties, or parameters to add metadata, modify behavior, or implement custom logic. 
* They are commonly used in frameworks like Angular to simplify configuration and extend 
* functionality.

* In other word, decorators are used for annotation and a meta programming syntax..

* Decorators are an experimental feature in TypeScript and need to be enabled in 
* tsconfig.json by setting "experimentalDecorators": true.

** Types of Decorators
* -> Class Decorators: Applied to classes.
* -> Method Decorators: Applied to methods within a class.
* -> Accessor Decorators: Applied to property accessors (getters and setters).
* -> Property Decorators: Applied to properties within a class.
* -> Parameter Decorators: Applied to a specific parameter within a method.
*/

function simpleClassDecorators(constructor: Function) {
    console.log("class decorators called");
    
}

@simpleClassDecorators
class MyClass {
    constructor() {
        console.log("My class");
        
    }
}

const myClassInstance = new MyClass();
console.log(myClassInstance);


/**OUTPUT
 * class decorators called
 * My class
 * MyClass {}
*/

/** we can use decorator to call something before the class constructor called... */



function MyDecorator(target: any) {
  console.log("Decorator called on:", target);
}

@MyDecorator
class MyRoom { }

/**
* @MyDecorator is a decorator applied to MyClass.
* The decorator function receives the class as an argument, allowing it to add functionality 
* or modify it.
 */