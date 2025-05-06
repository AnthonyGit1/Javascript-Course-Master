// Ejercicio 1
/*
 Escribe una funición en formato arrow function que tome como entrada un objeto y 
 devuelva una lista con sus propiedades. Solo puede tener como entrada un objeto y 
 el tipo de vuelta tiene que ser un array. 
        let person {
        name: “Lucas”,
        age: 27,
        profession:”Developer”,
        }
        return -> [name, age, profession]
 */
let getProperties = (obj) => {
    return Object.keys(obj);
}

// Objeto de ejemplo
let person = {
    name: "Anthony Luis",
    age: 22,
    profession: "Ingeniero de Sistemas",
    country: "Peru",
};

// Llamada a la función
console.log(getProperties(person));

// Ejercicio 2
/*
 Enumera los distintos valores que puede tener “this” y pon un ejemplo de cada uno.
 Enumera las diferencias entre arrow functions y function expressions.
*/

// Valores que puede tener "this" en JavaScript:
// 1. En el contexto global, "this" se refiere al objeto global (window en navegadores)
console.log(this === window); // true

// 2. En una función normal, "this" se refiere al objeto que llama a la función
function normalFunction() {
    'use strict'; // Modo estricto
    console.log(this); // En modo estricto, undefined; en modo no estricto, el objeto global
}
normalFunction(); // window (en modo no estricto) o undefined (en modo estricto)

// 3. En un método de objeto, "this" se refiere al objeto que contiene el método
const obj = {
    name: "Anthony",
    greet: function() {
        console.log(this.name); // Anthony
    }
};
obj.greet(); // Anthony

// 4. En un constructor, "this" se refiere a la instancia del objeto creado
function Person(name) {
    this.name = name;
}
const person1 = new Person("Anthony");
console.log(person1.name); // Anthony

// 5. En una función flecha, "this" no se vincula a su propio contexto,
// sino que hereda el "this" del contexto en el que fue definida
function FuncionPadre() {
  this.valor = 10;
  setTimeout(() => {
    console.log(this.valor); // 'this' hereda el 'this' de FuncionPadre
  }, 100);
}
const instanciaPadre = new FuncionPadre(); // Salida después de 100ms: 10

// 6. En los metodos call, apply y bind, "this" se puede establecer explícitamente
const person2 = {nombre: "Anthony"};
function mostrarNombre(apellido) {
  console.log(`Nombre: ${this.nombre}, Apellido: ${apellido}`);
}
mostrarNombre.call(person2, "Rosas"); // Nombre: Anthony, Apellido: Rosas
mostrarNombre.apply(person2, ["Rosas"]); // Nombre: Anthony, Apellido: Rosas

const mostrarNombreConBind = mostrarNombre.bind(person2, "Rosas");
mostrarNombreConBind(); // Nombre: Anthony, Apellido: Rosas

// Diferencias entre arrow functions y function expressions:
/* 
1. "this": En las funciones flecha, "this" no se vincula a su propio contexto, 
   sino que hereda el "this" del contexto en el que fue definida. En las funciones normales, 
   "this" se refiere al objeto que llama a la función.
2. Sintaxis: Las funciones flecha tienen una sintaxis más concisa y no requieren la palabra
   clave "function".
3. No tienen su propio "arguments": Las funciones flecha no tienen el objeto "arguments",
   mientras que las funciones normales sí lo tienen.
4. No pueden ser utilizadas como constructores: Las funciones flecha no pueden ser
   utilizadas con el operador "new", mientras que las funciones normales sí pueden.
5. No tienen "prototype": Las funciones flecha no tienen la propiedad "prototype",
   mientras que las funciones normales sí la tienen.
6. No pueden ser utilizadas como métodos de objeto: Las funciones flecha no pueden ser
   utilizadas como métodos de objeto, ya que no tienen su propio "this".
*/

// Ejercicio 3
/*
Crea una clase a la que llamaremos "InvertirCadena" con las siguientes propiedades:
•	Un atributo llamado cadenaInvertir que sea una cadena vacía.
•	Una función que tome el atributo cadenaInvertir e imprima en pantalla el resultado invertido. 
  Ej "Hola mundo" quedaría "odnum aloH". Recuerda la diferencia al llamar this en function arrows 
  vs function expressions.
•	Si el parámetro de la cadena cadenaInvertir es vacío, lance un error (throw). Ej. "". throw error.
•	Ahora instancia la clase en un objeto que llamaremos invertirCadena.

Ejecuta primero la función sin cambiar cadenaInvertir. 
¿Cómo podemos hacer para que nuestro código no rompa al ejecutarse?. 

Ahora cambia el valor a cadenaInvertir y vuelve a llamar la función. 
¿Cuál es el resultado?. 

Por último, intenta acceder al siguiente método invertirCadena.nuevoMetodo().
¿Cómo podemos hacer para que no de un error?
*/
class InvertirCadena {
    constructor() {
        this.cadenaInvertir = "";
    }

    invertirCadena() {
        if (this.cadenaInvertir === "") {
            throw new Error("La cadena está vacía");
        }
        return this.cadenaInvertir.split("").reverse().join("");
    }
}

// Instanciamos la clase en un objeto
let invertirCadena = new InvertirCadena();
// Llamamos a la función sin cambiar cadenaInvertir
try {
    console.log(invertirCadena.invertirCadena()); // Error: La cadena está vacía
} catch (error) {
    console.error(error.message); // Manejo del error
}
// ¿Cómo podemos hacer para que nuestro código no rompa al ejecutarse?. 
// Respuesta: Usando un bloque try-catch para manejar el error.

// Cambiamos el valor a cadenaInvertir y volvemos a llamar la función
invertirCadena.cadenaInvertir = "Hola mundo";
console.log(invertirCadena.invertirCadena()); // odnum aloH
// ¿Cuál es el resultado?
// Respuesta: El resultado es "odnum aloH", que es la cadena invertida.

// Intentamos acceder al siguiente método invertirCadena.nuevoMetodo()
// invertirCadena.nuevoMetodo(); // Error: nuevoMetodo is not a function
// ¿Cómo podemos hacer para que no de un error?
// Respuesta: Podemos agregar un nuevo método a la clase InvertirCadena para evitar el error.
// Por ejemplo, podemos agregar un método nuevoMetodo() que imprima un mensaje.
/*
class InvertirCadena {
    constructor() {
        this.cadenaInvertir = "";
    }

    invertirCadena() {
        if (this.cadenaInvertir === "") {
            throw new Error("La cadena está vacía");
        }
        return this.cadenaInvertir.split("").reverse().join("");
    }

    nuevoMetodo() {
        console.log("Este es un nuevo método");
    }
}

InvertirCadena.nuevoMetodo(); // Este es un nuevo método
// Ahora podemos llamar al nuevo método sin errores.
*/

// Ejercicio 4
/*
Crea una clase con el formato ES6. Esta clase va a tener dos atributos, “username” y “password”
y un método login() que compruebe que username tiene el valor “admin” y password el valor “passwd”
y en caso positivo, lance una alerta diciendo que el usuario esté logeado, en caso contrario, que
diga que el usuario o la contraseña son incorrectas. Siendo que:

  let login = new Login(“admin”, “passwd”) // alert -> User logged in
  let logbad = new Login(“pepe”, “bad”) // alert -> User or passwd incorrect
*/
class Login {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    login() {
        if (this.username === "admin" && this.password === "passwd") {
            alert("User logged in");
        } else {
            alert("User or passwd incorrect");
        }
    }
}

let login = new Login("admin", "passwd");
login.login(); // alert -> User logged in

let logbad = new Login("pepe", "bad");
logbad.login(); // alert -> User or passwd incorrect

// Ejercicio 5
/*
En este ejercicio os voy a hacer mirar un poco de documentación extra. Y vamos a utilizar 
el fichero que se encuentra en activity/2_session/index.html.
    • Crea dos clickListener, para los botones con id loginSuccess y loginFailure. En el
    primero crearemos un objeto login que sea correcto y llamaremos a la función para que 
    de el resultado correcto. En el segundo crearemos un objeto login con parámetros 
    incorrectos y llamaremos a login para que falle. Para ello consulta los siguientes documentos.

Get DOM element -> https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById 
Click Listener -> https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event 
*/
let loginSuccessButton = document.getElementById("loginSuccess");
let loginFailureButton = document.getElementById("loginFailure");

// Listener para el botón de éxito
loginSuccessButton.addEventListener("click", function() {
    let login = new Login("admin", "passwd");
    login.login(); // alert -> User logged in
});

loginFailureButton.addEventListener("click", function() {
    let logbad = new Login("pepe", "bad");
    logbad.login(); // alert -> User or passwd incorrect
});

// Ejercicio 6
let loginWitUsername = (username, password) => {
    return new Promise(function (resolve, rejected) {
      setTimeout(() => {
        if (username === "admin" && password === "passwd") {
          resolve("User logged in");
        } else {
          rejected("Error: invalid username or password");
        }
      }, 200);
    });
};

/*
    • Crea dos clickListener, para los botones con id loginSuccessAsync y loginFailureAsync. 
    En el primero llamaremos a la función loginWithUsername para que de el resultado correcto. 
    En el segundo llamaremos a la función con parámetros incorrectos. Os dejo un par de pistas 
    para resolver el ejercicio.
    
    • Primero, addEventListener(‘click’, () => {}) no acepta asincronía ya que es una función 
    síncrona. Pero es posible sustituir el segundo argumento () => {}, que es una función, por 
    una función asíncrona (habría que añadir una palabra reservada que hemos visto).
    
    • loginWithUsername devuelve una promesa, que lanza una excepción si falla, por lo que 
    habría que atrapar esa excepción para que nuestro programa no falle.
*/
let loginSuccessAsyncButton = document.getElementById("loginSuccessAsync");
let loginFailureAsyncButton = document.getElementById("loginFailureAsync");

// Listener para el botón de éxito asíncrono
loginSuccessAsyncButton.addEventListener("click", async () => {
    try {
        let result = await loginWitUsername("admin", "passwd");
        alert(result); // User logged in
    } catch (error) {
        alert(error); // Error: invalid username or password
    }
});

// Listener para el botón de fallo asíncrono
loginFailureAsyncButton.addEventListener("click", async () => {
    try {
        let result = await loginWitUsername("pepe", "bad");
        alert(result); // User logged in
    } catch (error) {
        alert(error); // Error: invalid username or password
    }
});