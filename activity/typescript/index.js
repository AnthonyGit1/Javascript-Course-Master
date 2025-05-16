// Ejercicio 1
/* 
Crea una interfaz 'Person' que tenga como atributos 'name', 'age' y 'profession'. Ahora define una arrow 
function que tenga como parámetro esta interfaz y que devuelva un array con el valor de sus propiedades, 
esta función tiene que tener tipado el parámetro de entrada y el return.
*/
var getPersonProperties = function (person) {
    return [person.name, person.age, person.profession];
};
var person = {
    name: "Anthony Luis",
    age: 22,
    profession: "Ingeniero de Sistemas e Informática"
};
console.log(getPersonProperties(person));
// Ejercicio 2
/*
Escribe una función llamada sumOrConcatenate que acepte dos parámetros. Cada uno de estos parámetros podrá
ser de tipo number o string. La función devolverá una suma si los dos parámetros son números, una
concatenación con el símbolo `-` si son los dos `strings` o una cadena concatenadad con `:` si uno es un
number y el otro string.
*/
var sumOrConcatenate = function (a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else if (typeof a === 'string' && typeof b === 'string') {
        return a + '-' + b;
    }
    else {
        return a + ':' + b;
    }
};
console.log(sumOrConcatenate(4, 3)); // --> 7
console.log(sumOrConcatenate(4, "hello")); // --> 4:hello 
console.log(sumOrConcatenate("hello", "world")); // --> hello-world
// Ejercicio 3
/*
•Crea dos interfaces, una llamada `Car` y otra `Motorcycle`. La primera tendrá las propiedades `tires` (number),
`turnOnEngine()` (función que devuelve void) y `pressPedal()` (función que devuelve void).
•La segunda tendrá las propiedades `tires` (number), `turnOnEngine()` (función que devuelve void) y
`openThrottle()` (función que devuelve void).
•Escribe una función que acepte un parámetro que pueda ser `Car` o `Motorcycle` que, primero llame a turnOnEngine, 
y luego si es Car llame a pressPedal pero si es Motorcycle llame a openThrottle().
•Para la comprobación no valdrá `typeof`, necesitaremos hacer uso de type predicates.
*/
var isCar = function (vehicle) {
    return vehicle.pressPedal !== undefined;
};
var startVehicle = function (vehicle) {
    vehicle.turnOnEngine();
    if (isCar(vehicle)) {
        vehicle.pressPedal();
    }
    else {
        vehicle.openThrottle();
    }
};
var myCar = {
    tires: 4,
    turnOnEngine: function () { return console.log("Car engine started"); },
    pressPedal: function () { return console.log("Car pedal pressed"); }
};
var myMotorcycle = {
    tires: 2,
    turnOnEngine: function () { return console.log("Motorcycle engine started"); },
    openThrottle: function () { return console.log("Motorcycle throttle opened"); }
};
startVehicle(myCar); // --> Car engine started, Car pedal pressed
startVehicle(myMotorcycle); // --> Motorcycle engine started, Motorcycle throttle opened
// Ejercicio 4
/*
•Crea una `función genérica`, que acepte un array que pueda contener `strings` y `numbers` y
devuelva el mismo array sin el primer elemento.

const strArray: string[] = ['Hello', 'World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
const numArray: number[] = [1, 2, 3, 4, 5, 6, 7];
const mixedArray: Array<number|string> = ['Hello', 'I', 'have', 3, 'tasks'];
const unsupportedArray = [{name: 'Lucas', surname: 'Fernandez'}, 'Hello', 22];

const newStrArray = removeFirstEntry(strArray);
const newNumArray = removeFirstEntry(numArray);
const newMixedArray = removeFirstEntry(mixedArray);
// const newUnsupportedArray = removeFirstEntry(unsupportedArray); --> will fail

console.log(newStrArray); // --> ['World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
console.log(newNumArray); // --> [2, 3, 4, 5, 6, 7];
console.log(newMixedArray); // --> ['I', 'have', 3, 'tasks'];
*/
var removeFirstEntry = function (arr) {
    return arr.slice(1);
};
var strArray = ['Hello', 'World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
var numArray = [1, 2, 3, 4, 5, 6, 7];
var mixedArray = ['Hello', 'I', 'have', 3, 'tasks'];
var unsupportedArray = [{ name: 'Lucas', surname: 'Fernandez' }, 'Hello', 22];
var newStrArray = removeFirstEntry(strArray);
var newNumArray = removeFirstEntry(numArray);
var newMixedArray = removeFirstEntry(mixedArray);
var newUnsupportedArray = removeFirstEntry(unsupportedArray);
console.log(newStrArray); // --> ['World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
console.log(newNumArray); // --> [2, 3, 4, 5, 6, 7];
console.log(newMixedArray); // --> ['I', 'have', 3, 'tasks'];
console.log(newUnsupportedArray); // --> ['Hello', 22];
