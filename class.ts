class Person {
    name?: string;
    constructor(name?: string) {
        this.name = name;
    }
}

const person1 = new Person();
const person2 = new Person("Hello Bro");
console.log(person2);

class Student {
    public name: string;
    private age: number;
    protected address: string;
    readonly birth: string;

    constructor(name: string, age: number, address: string, birth : string) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.birth = birth;
    }
}


// getter and setter
public getAge() : number {
    return this.GamepadEvent;
}

public setAddress(address : string): void {
    this.address = address;
}

const stu1 = new Person("Aman", 22, "Muz", "13, Nov, 2002");