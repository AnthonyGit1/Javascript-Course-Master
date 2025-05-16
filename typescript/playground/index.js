"use strict";
function getObjectKeys(obj) {
    return Object.keys(obj);
}
const sum = (a, b) => a + b;
// Example usage of the arrow function
console.log("Suma de 5 y 3:", sum(5, 3));
const persona1 = {
    nombre: "Ana",
    apellidos: "García López",
    edad: 30,
    ciudad: "Madrid",
    trabajo: "Ingeniera de Software",
};
const persona2 = {
    nombre: "Carlos",
    apellidos: "Martínez Rodríguez",
    edad: 25,
    ciudad: "Barcelona",
};
const persona3 = {
    nombre: "Sofía",
    apellidos: "Hernández Pérez",
    edad: 42,
    ciudad: "Valencia",
    trabajo: "Doctora",
};
const persona4 = {
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
const coche = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2021
};
console.log("Claves de coche:", getObjectKeys(coche));
let name1 = "Juan";
let name2 = "Pedro"; // Inferido como string
name2 = 12; // Cambiando el valor de name2
let numbers = [1, 2, 3, 4, 5];
const sumaNumeros = (num1, num2) => num1 + num2;
var Direccion;
(function (Direccion) {
    Direccion["Norte"] = "norte";
    Direccion["Sur"] = "sur";
    Direccion["Este"] = "este";
    Direccion["Oeste"] = "west";
})(Direccion || (Direccion = {}));
let direccionActual = Direccion.Oeste;
console.log(direccionActual);
console.log("End of the script");
let userInput;
userInput = "Hola, soy un string";
console.log(typeof userInput); // "string"
//userInput = 42; // Cambiando el valor a un número
if (typeof userInput === "string") {
    console.log(userInput.toUpperCase());
}
let userInput2 = "Hola, soy un string";
console.log(userInput2.toUpperCase());
function printPhoneNumber(phoneNumber) {
    console.log("Your phone number is " + phoneNumber);
}
printPhoneNumber(612389238);
printPhoneNumber("637839489");
const person1 = {
    name: "John Doe",
    age: 23,
    isStudent: true
};
console.log("-------------");
function padLeft(value, padding) {
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
function example(x, y) {
    if (x === y) {
        // X e Y serán string
        x.toUpperCase();
        y.toLowerCase();
    }
    else {
        // X podrá ser string o number
        console.log(x);
        // Y podrá ser string o boolean
        console.log(y);
    }
}
console.log("-------------");
function move(animal) {
    if ("swim" in animal) {
        return animal.swim();
    }
    return animal.fly();
}
function getSmallPet() {
    return {
        swim: function () {
            console.log("swimming");
        },
        breath: function () {
            console.log("breathing");
        }
    };
}
let pet = getSmallPet();
move(pet);
function isFish(pet) {
    return pet.swim !== undefined;
}
pet.breath();
if (isFish(pet)) {
    pet.swim();
    pet.breath();
}
else {
    pet.fly();
    pet.breath();
}
console.log("-------------");
const names = ["Alice", "Bob", "Eve"];
names.forEach((s) => {
    console.log(s.toUpperCase()); // Will trigger -> Property 'toUppercase' does not exist on type 'string'. Did you mean 'toUpperCase'?
});
let person = { name: "Lucas", age: 28 };
class Student1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    displayInfo() {
        console.log(`Hello my name is ${this.name} and I'm ${this.age}`);
    }
}
const arrStringYNumber = ["Hola", 12, "Mundo", 34];
const lastNumber = (arr) => {
    return arr[arr.length - 1];
};
console.log("--------------");
const lNumber = lastNumber([2, 4, 5]);
const lString = lastNumber(["a", "b", "c"]);
const lArray = lastNumber(["a", "b", ["asd"]]);
console.log(lNumber); // 5
let messageNumber = { id: "as8df90asdf", timestamp: 23429342349, data: 23482934092384092384029384293840238 };
console.log(messageNumber);
let messageString = { id: "oiausdf989as", timestamp: 38495830989, data: "Hello World" };
console.log(messageString);
let messageObject = { id: "oiausdf989as", timestamp: 38495830989, data: { name: "Lucas", age: 28 } };
let point = "x";
function getProperty(obj, key) {
    return obj[key];
}
const developer = {
    name: "Tobias",
    salary: 100,
};
const nameType = getProperty(developer, "name");
console.log(nameType); // Tobias
