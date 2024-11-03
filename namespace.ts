/**
 * In TypeScript, namespaces (previously called "internal 
 * modules") are a way to group related code, such as functions,
 * classes, or interfaces. By wrapping code within a namespace,
 * you can organize code better and control the visibility of 
 * variables or classes.
 */

namespace registerValidation {
    export function validateName(name: string): boolean {
        return name.length > 0;
    }
}

const isValidName = registerValidation.validateName("Aman");
console.log(isValidName);
