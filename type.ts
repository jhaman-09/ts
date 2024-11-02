type Customer = {
    name: string,
    age: number
};

// performing Union between Two type
type Account = Customer & {
  Account: number;
  Number: number;
};


// UNION
// It is neccessary to define all the Unioned variables
const User: Account = {
    name: "Aman Kumar",
    age: 22,
    Account: 101410,
    Number : 9676
};

console.log(User);

// INTERSECTION
let User2: string | object = "Aman";
User2 = {
    name: "Aman Kumar",
    mobile : 9576
}

console.log(User2);

/**Note:
 * we can access this Customer and Account datatype all over the directory
 * It is neccessary to define all the Unioned variables
 * It improves code reusability
 * best practice is that define this types of datatype in a specefic types.ts file and access to all over its defined directory
 */
