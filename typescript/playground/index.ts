function getObjectKeys<T extends object>(obj: T): (keyof T)[] {
  return Object.keys(obj) as (keyof T)[];
}

const sum = (a: number, b: number): number => a + b;

// Example usage of the arrow function
console.log("Suma de 5 y 3:", sum(5, 3));

type Person = {
  nombre: string;
  apellidos: string;
  edad: number;
  ciudad: string;
  trabajo?: string; // Hacemos trabajo opcional por si alguien está desempleado o es estudiante
};

const persona1: Person = {
  nombre: "Ana",
  apellidos: "García López",
  edad: 30,
  ciudad: "Madrid",
  trabajo: "Ingeniera de Software",
};

const persona2: Person = {
  nombre: "Carlos",
  apellidos: "Martínez Rodríguez",
  edad: 25,
  ciudad: "Barcelona",
};

const persona3: Person = {
  nombre: "Sofía",
  apellidos: "Hernández Pérez",
  edad: 42,
  ciudad: "Valencia",
  trabajo: "Doctora",
};

const persona4: Person = {
  nombre: "Ana",
  apellidos: "García López",
  edad: 30,
  ciudad: "Madrid",
  trabajo: "Ingeniera de Software",
};

console.log("Claves de persona1:", getObjectKeys(persona1));
console.log("Claves de persona2:", getObjectKeys(persona2));
console.log("Claves de persona3:", getObjectKeys(persona3));

// Ejemplo con un objeto diferente para demostrar la genericidad
const coche: {
  marca: string;
  modelo: string;
  año: number;
} = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2021
};

console.log("Claves de coche:", getObjectKeys(coche));

let name1: string = "Juan";

let name2: any = "Pedro"; // Inferido como string
name2 = 12; // Cambiando el valor de name2

let numbers: number[] = [1, 2, 3, 4, 5];

const sumaNumeros = (num1: number, num2: number) => num1 + num2;

enum Direccion {
  Norte = "norte",
  Sur = "sur",
  Este = "este",
  Oeste = "west",
}

let direccionActual: Direccion = Direccion.Oeste;
console.log(direccionActual);


console.log("End of the script");

type StringOrNumber = string | number;

let userInput: StringOrNumber;

userInput = "Hola, soy un string";
console.log(typeof userInput); // "string"

//userInput = 42; // Cambiando el valor a un número
if (typeof userInput === "string") {
  console.log(userInput.toUpperCase());
}

let userInput2: string = "Hola, soy un string";
console.log(userInput2.toUpperCase());

function printPhoneNumber(phoneNumber: StringOrNumber) {
  console.log("Your phone number is " + phoneNumber);
}

printPhoneNumber(612389238);
printPhoneNumber("637839489");

type Student = {
  name: string;
  age: number;
  isStudent: boolean;
};

const person1: Student = {
  name: "John Doe",
  age: 23,
  isStudent: true
}

interface Person1 {
  name: string;
  age: number;
  id?: string;
  talk:(arg0: string)=>void;
}

console.log("-------------");

function padLeft(value: string, padding: string|number) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${typeof padding}'.`);
}

console.log(padLeft("Hello", 4)); // "    Hello"
console.log(padLeft("Hello", ">>> ")); // ">>> Hello"


function example(x: string | number, y: string | boolean) {
  if (x === y) {
    // X e Y serán string
    x.toUpperCase();
    y.toLowerCase();
  } else {
    // X podrá ser string o number
    console.log(x);
    // Y podrá ser string o boolean
    console.log(y);
  }
}

console.log("-------------");

type Fish = { swim: () => void, breath: () => void };
type Bird = { fly: () => void, breath: () => void };
type Dog = { walk: () => void, breath: () => void };

function move(animal: Fish | Bird | Dog) {
  if ("swim" in animal) {
    return animal.swim();
  }

    if ("walk" in animal) {
    return animal.walk();
  }

  return animal.fly();
}

function getSmallPet(): Fish | Bird | Dog {
  return {
    swim: function () {
      console.log("swimming");
    },
    breath: function () {
      console.log("breathing");
    },
  };
}

let pet = getSmallPet();

pet.breath();

move(pet);

function isFish(pet: Fish | Bird| Dog ): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function isBird(pet: Fish | Bird| Dog ): pet is Bird {
  return (pet as Bird).fly !== undefined;
}

pet.breath();

if (isFish(pet)) {
  pet.swim();
  pet.breath();
} else if(isBird(pet)) {
  pet.fly();
  pet.breath();
} else {
  pet.walk();
  pet.breath();
}

const pet2 = pet as Fish;

console.log("-------------");

const names = ["Alice", "Bob", "Eve"];

names.forEach((s) => {
  console.log(s.toUpperCase()); // Will trigger -> Property 'toUppercase' does not exist on type 'string'. Did you mean 'toUpperCase'?
});

let person: {
  name: string;
  age: number;
  isStudent?: boolean;
} = {name: "Lucas", age: 28};


class Student1 {
  name: string;
  age: number;

  constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
  }

  displayInfo(): void {
      console.log(`Hello my name is ${this.name} and I'm ${this.age}`);
  }
}

const arrStringYNumber: Array<string|number> = ["Hola", 12, "Mundo", 34];

const lastNumber = <T>(arr: Array<T>): T | undefined => {
  return arr[arr.length - 1];
}

console.log("--------------");

const lNumber = lastNumber([2, 4, 5]);
const lString = lastNumber(["a", "b", "c"]); 
const lArray = lastNumber(["a", "b", ["asd"]]); 
console.log(lNumber); // 5


interface Message<T> {
  id: string;
  timestamp: number;
  data: T;
}

type MessageNumber = Message<number>;
let messageNumber: MessageNumber = {id: "as8df90asdf", timestamp: 23429342349, data: 23482934092384092384029384293840238};
console.log(messageNumber);

type MessageString = Message<string>;
let messageString: MessageString = {id: "oiausdf989as", timestamp: 38495830989, data: "Hello World"};
console.log(messageString);

type MessageObject = Message<{ name: string; age: number }>;
let messageObject: MessageObject = {id: "oiausdf989as", timestamp: 38495830989, data: {name: "Lucas", age: 28}};


type Point = { x: number; y: number };
type P = keyof Point; // "x" | "y"
let point: P = "x";


type Staff = {
  name: string;
  salary: number;
};

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const developer: Staff = {
  name: "Tobias",
  salary: 100,
};

const nameType = getProperty(developer, "name");

console.log(nameType); // Tobias



type Mail = {
  header: string;
  body: string;
  timestamp: number;
}

interface MailInterface {
  header: string;
  body: string;
  timestamp: number;
}

function printMail(mail: MailInterface) {
  console.log(`${mail.header} - ${mail.timestamp}`);
  console.log(`---------------------------------`);
  console.log(`${mail.body}`);
}

interface PersonNew {
    name: string;
    age: number;
    id?: string;
    talk:(message: string)=>void;
}

const personNew: PersonNew = {
  name: "Lucas",
  age: 28,
    id: "123456789",
  talk: (message: string) => {
    console.log(message);
  }
};
