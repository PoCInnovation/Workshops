### Basic variables

```typescript
const myConstante = 'Hello'; // You can't modify the value
let variable = 3; // You can change this value
```

### Basic Types

```typescript
const myStr: string = 'hello world' // String
const myNum: number = 3 // Number
const myBool: boolean = true // boolean
```

#### Inference

```typescript
let myInference = 'foo bar' // Your variable will be typed as string
myInference = 3 // This create an error because your variable as type string
```

### Array

```typescript
const myArr: Array<string> = ['hello world'] // You can create an array with the keyword Array<> or []. Exemple: Array<number> === number[] 
```

### Interface
You can also create types for object, it's an interface :

```typescript
interface Person {
    name: string,
    age: number;
}

const me: Person = { name: 'John', age: 20 };
const otherPerson: Person = { name: 'John', age: 20, sexe: 'man' }; // This create an error because the attribut 'sexe' doesn't exist in the type Person.
```

### Function

```typescript
function sum(n1: number, n2: number) {
    return n1 + n2;
}

sum(1, 1) // OK
sum(1, 'a') // Error
```

### Arrow Function

```typescript
const arrowSum = (n1: number, n2: number) => n1 + n2; // Same as previous "sum" function. If your arrow function is inline, it's instant returning.

const longArrowSum = (n1: number, n2: number) => { // Same as "arrowSum" but more long :) 
    return n1 + n2;
}

// Default parameter
function sayHello(name = 'John') {
    console.log(`Hello ${name}`);
}

sayHello(); // Print "Hello John"
sayHello('Doe') // Print "Hello Doe"
sayHello(4) // Error, type string is required
```

### Enum

```typescript
enum School {
    EPITECH = 'epitech',
    HEC = 'HEC',
    POL = 'Polytechnique'
}
```


### Class

```typescript
class Student {
    name: string;

    age: number;

    school: School;


    constructor(name: string, age: number, school: School) {
        this.name = name;
        this.age = age;
        this.school = school;

        console.log('Object Student has been successfully created');
    }

    hello() {
        console.log('Hello' + this.name);
    }
}

const student = new Student('John', 20, School.EPITECH); // Create a nes typed object.
student.hello(); // Use method of your class -> will print 'Hello' with the name of your student.

// You can also use your class as Type like that;
const otherStudent: Student = { name: 'John', age: 23, school: School.HEC, hello: () => console.log('hey') };
otherStudent.hello(); // Will print 'hey'
```
