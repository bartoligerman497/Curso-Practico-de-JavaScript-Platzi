// Resuelto sin ver los videos

// Variables y operaciones

// 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:
// Nombre
// Apellido
// Nombre de usuario en Platzi
// Edad
// Correo electrónico
// Mayor de edad
// Dinero ahorrado
// Deudas

// 3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.
let nombre = "Nombre";
let apellido = "Apellido";
let nombreUsuarioPlatzi = "";
let edad = 200;
let email = "email@email.com";
let mayorEdad = true;
let dineroAhorrado = 100000;
let deudas = 10000;

// 4️⃣Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

// a) Nombre completo (nombre y apellido)

nombre = "Nombre";
apellido = "Apellido";

console.log("4 Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:");
console.log("a Nombre completo (nombre y apellido)");
console.log(`Mi nombre completo es ${nombre} ${apellido}`);

// b) Dinero real (dinero ahorrado menos deudas)

dineroAhorrado = 200000;
deudas = 100000;

let dineroReal = dineroAhorrado - deudas;

console.log(`b Dinero real (dinero ahorrado menos deudas)`);
console.log(`El total de mi dinero real es: $ ${dineroReal}`);

// Funciones

// 2️⃣Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

const name = "German";
const lastname = "Bartoli";
const completeName = name + " " + lastname;
const nickname = "Ger";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

// Rta - Funcion
function printName(name, lastname, nickname) {
    const completeName = name + lastname;
    console.log(`Mi nombre es ${completeName}, pero prefiero que me digas ${nickname}.`);
}

printName("German", "Bartoli", "Ger");

// --------------------------------------

// Condicionales

// 2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:
var tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
    case "Free":
        console.log("Solo puedes tomar los cursos gratis");
        break;
    case "Basic":
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        break;
    case "Expert":
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        break;
    case "ExpertPlus":
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        break;
}

// Rta
tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion === "Free") {
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion === "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion === "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion === "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

// 3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).
// 💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional. 😏

// Rta
tipoDeSuscripcion = "Basic";

var mensajes = {
    Free: "Solo puedes tomar los cursos gratis",
    Basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    Expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    ExpertPlus: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
};

if (mensajes[tipoDeSuscripcion]) {
    console.log(mensajes[tipoDeSuscripcion]);
}

// Rta 2
tipoDeSuscripcion = "Basic";

const suscripciones = ["Free", "Basic", "Expert", "ExpertPlus"];
mensajes = [
    "Solo puedes tomar los cursos gratis",
    "Puedes tomar casi todos los cursos de Platzi durante un mes",
    "Puedes tomar casi todos los cursos de Platzi durante un año",
    "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
];

const index = suscripciones.indexOf(tipoDeSuscripcion);

if (index !== -1) {
    console.log(mensajes[index]);
}

// --------------------------------------

// Ciclos

// 2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

// Rta

let i = 0;
while (i < 5) {
    console.log(`El valor de i es: ${i}`);
    i++;
}

let j = 10;
while (j >= 2) {
    console.log(`El valor de j es: ${j}`);
    j--;
}

// 3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
// 💡 Pista: puedes usar la función prompt de JavaScript.

let correcto = false;

while (!correcto) {
    const respuesta = prompt("¿Cuánto es 2 + 2?");
    if (respuesta === "4") {
        correcto = true;
        alert("Felicidades, has respondido correctamente!");
    } else {
        alert("Lo siento, esa respuesta no es correcta. Vuelve a intentarlo.");
    }
}

// --------------------------------------

// Listas

// 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

function imprimirPrimerElemento(array) {
    console.log(array[0]);
}

imprimirPrimerElemento([1, 2, 3, 4, 5]); // Imprime 1
imprimirPrimerElemento(["a", "b", "c"]); // Imprime 'a'
imprimirPrimerElemento([true, false, true]); // Imprime true

// 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

function imprimirElementos(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

imprimirElementos([1, 2, 3, 4, 5]); // Imprime 1, 2, 3, 4, 5
imprimirElementos(["a", "b", "c"]); // Imprime 'a', 'b', 'c'
imprimirElementos([true, false, true]); // Imprime true, false, true

//4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

function imprimirElementos(objeto) {
    for (const propiedad in objeto) {
        console.log(`${propiedad}: ${objeto[propiedad]}`);
    }
}

imprimirElementos({ a: 1, b: 2, c: 3 }); // Imprime "a: 1", "b: 2", "c: 3"
imprimirElementos({ nombre: "German", apellido: "Bartoli", edad: 23 }); // Imprime "nombre: German", "apellido: Bartoli", "edad: 23"
imprimirElementos({}); // No imprime nada
