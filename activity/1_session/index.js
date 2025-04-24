// Ejercicio 1
import "./aboutme.js";
console.log("Ejercicio 1");

// Ejercicio 2
/* 
¿Qué se ejecuta antes? 
El contenido de aboutme.js se ejecuta antes que console.log("Ejercicio 1").
¿Por qué? 
Porque la declaración import carga y ejecuta el archivo aboutme.js antes de
continuar con el resto del código en index.js.
*/

// Ejercicio 3
//Programa un script que imprima todos los números del 1 al 100 que sean divisibles por 7.
for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0) {
        console.log(i);
    }
}

// Ejercicio 4
/*
¿Qué valor tendrá la variable `i` al finalizar el bucle? 
La variable `i` tendrá el valor 101 al finalizar el bucle.

¿Por qué?
Porque el bucle se ejecuta mientras `i` sea menor o igual a 100, 
y al finalizar el bucle, `i` se incrementa a 101.

¿Habría alguna forma de evitar que la variable `i` se declare de forma global?
Para evitar que la variable `i` se declare de forma global, se puede usar `let`
en lugar de `var`, lo que limitará el alcance de `i` al bloque del bucle. Así,
`i` no estará disponible fuera del bucle.
*/

// Ejercicio 5
/*
¿Cuáles son las diferencias entre ejecutar un fichero JavaScript en un navegador 
web en formato script y en formato script type=”module”?. 
Las diferencias son las siguientes:
1.script (Script tradicional):
  -El código dentro del script se ejecuta en el contexto global de la página, lo 
  que significa que las variables y funciones definidas en el script están 
  disponibles en la página principal y en otros scripts que también se carguen. 
  -No usa strict mode por defecto, lo que puede causar problemas de compatibilidad 
  y comportamientos inesperados. 
  -Requiere el atributo defer para asegurar que el script se ejecute después de 
  que se haya cargado y analizado el HTML. 
  -No ofrece soporte nativo para la modularidad, es decir, no se puede importar o 
  exportar código entre diferentes scripts usando "import" y "export". 

2.script type=”module” (Módulo):
  -El código dentro del módulo se ejecuta en un contexto independiente, lo que 
  evita conflictos con el código global de la página y con otros módulos. 
  -Usa strict mode por defecto, lo que promueve un código más limpio y predecible. 
  -No requiere el atributo defer, ya que los módulos se cargan y ejecutan de forma
  asíncrona. 
  -Ofrece soporte nativo para la modularidad, es decir, se puede importar y 
  exportar código entre diferentes módulos usando "import" y "export". 
  -Facilita la organización y reutilización del código, haciendo que las 
  aplicaciones sean más fáciles de mantener y escalar. 
*/

// Ejercicio 6
/*
Crea un objeto llamado formatter con un atributo, que llamaremos “prefix”, que tendrá
de valor “Hello “, y un método que llamaremos “append”, que imprimirá la concatenación
entre el atributo “prefix” y la cadena que pasemos como argumento en el método.

    formatter.append(“World”) // Result: Hello World
*/
const formatter = {
    prefix : "Hello ",
    append : function (str) {
        console.log(formatter.prefix + str);
    }
}

formatter.append("World");

/*
Ahora añade mediante el atributo prototype otro método que acepte también un solo 
argumento e imprima esa misma cadena en minúsculas.

    formatter.toLowerString(“I’m Lucas”) // Result: i’m lucas
*/
Object.setPrototypeOf(formatter, {
    toLowerString(str) {
        console.log(str.toLowerCase());
    }
});

formatter.toLowerString("I’m Lucas");