// Cómo conectar JavaScript con HTML

console.log("Hello, World");

// Leyendo HTML desde JavaScript

// CSS
// h1{ color: red }
// .parrafito{}
// #pid {...}

const h1 = document.querySelector("h1");

console.log(h1);

const p = document.querySelector("p");
const p2 = document.querySelectorAll("p");

const parrafito2 = document.querySelector(".parrafito");
// No hace falta el .
const parrafito = document.getElementsByClassName("parrafito");

const pid = document.querySelector("#pid");
// No hace falta el #
const pid2 = document.getElementById("pid");

// const input = document.querySelector("input");
const input = document.getElementById("inputt");
console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

// Escribiendo HTML desde JavaScript

h1.innerHTML = "Patito <br> Feo";
h1.innerText = "Patito <br> Feo";

console.log(h1.getAttribute("Pantalla"));
console.log(h1.getAttribute("class"));

h1.setAttribute("class", "rojo");
console.log(h1.getAttribute("class"));

h1.classList.add("marron");
h1.classList.remove("verde");

console.log(h1);
console.log(h1.classList);

// h1.classList.toggle("");
// h1.classList.contains("");

input.value = 588;

document.createElement("img").value = "";
console.log(document.createElement("img"));
console.log(document.createElement("span"));

const img = document.createElement("img");
img.setAttribute("src", "https://i.pinimg.com/originals/8b/02/40/8b02409f975c98c89e15bc089e3bd289.gif");
console.log(img);

//pid.replaceWith(img);

pid.innerHTML = "";
pid.appendChild(img);

// Eventos en JavaScript: interactuando con usuarios

const h2 = document.querySelector("h2");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result");

function btnOnClick() {
    console.log("Escuchando el evento OnClick");

    // Concatenación
    // const sumaInputs = input1.value + input2.value;

    // Suma
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);

    pResult.innerText = "Resultado: " + sumaInputs;
}

// AddEventListener

const input3 = document.querySelector("#calculo3");
const input4 = document.querySelector("#calculo4");
const form = document.querySelector("#form");
const btnCalcularAddEventListener = document.querySelector("#btnCalcularAddEventListener");
const pResultAddEventListener = document.querySelector("#resultAddEventListener");

// Forma 1

// function OnClick(){
//     const sumaInputs2 = parseInt(input3.value) + parseInt(input4.value);

//     pResultAddEventListener.innerText = "Resultado: " + sumaInputs2;
// }

// btnCalcularAddEventListener.addEventListener('click', OnClick) // Sin parentesis porque ya se los pone

// Forma 2

btnCalcularAddEventListener.addEventListener("click", sumarInputValues); // Sin parentesis porque ya se los pone

form.addEventListener("submit", sumarInputValues);

function sumarInputValues(event) {
    console.log({ event });
    event.preventDefault();
    const sumaInputs2 = input3.value + input4.value;
    pResultAddEventListener.innerText = "Resultado: " + sumaInputs2;
}
