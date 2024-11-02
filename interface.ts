interface user {
    name: string
    age : number
}
let person : user = {
    name: "Aman",
    age : 22
}
console.log(person);


interface vehicle {
    make: string,
    model : string
}


interface car extends vehicle {
    isElectric : boolean
}

const sedan: car = {
    make: "TE",
    model: "X",
    isElectric : true
}

console.log(sedan);


// Difference B/W Interface and Type

/** INTERFACE
 * We can define same interface again and again
 * after define the same interface again, then its has all type in it of all defined interfaces
 * and this process is called declearation merging
 * if doesnot want some variale to use then define  them interface like optional;
 * interface car = { name ?: string }
 */

/** TYPE
 * We cannot redefine the same type
 * We can perform union and intersection
 * after difined, the variables values
 * must present..
 */