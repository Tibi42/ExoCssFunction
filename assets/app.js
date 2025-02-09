// Addition 15 + 5
// Soustraction 20 - 15
// Multiplication 2 * 10

console.log(15 + 5)

let a = 20;
let b = 15;
let soustraction = a - b;
console.log(soustraction);

let c = 325;
let d = 2056;
let add = c + d;
console.log(add);

let e = 2000;
let f = 2900;
let sous = e - f;
console.log(sous);

let g = 40;
let h = 253;
let multiplication = g * h;
console.log(multiplication);

a = 2;
b = 10;
multiplication = a * b;
console.log(multiplication);

a = 21;
b = 22;
add = a + b;
console.log(add);

a = 60;
b = 300;
sous = a - b;
console.log(sous)

a = 25;
b = 300;
multiplication = a * b;
console.log(multiplication);

a = 58;
b = 29;
add = a + b;
console.log(add);

a = 7;
b = 20;
sous = 7 - 20;
console.log(sous);

a = 6;
b = 253;
multiplication = a * b;
console.log(multiplication)

// Fonctions 

function addition (a,b) {
    return a + b;
}
let somme = addition( 15, 5);
console.log(somme);

somme = addition (325, 20156)
console.log(somme)

somme = addition (21, 22)
console.log(somme)

somme = addition (58, 29)
console.log(somme)

// let x = Number(prompt("choisissez un premier nombre"));
// let y = Number(prompt("choissez un second nombre"));
// let operation = prompt("Choisissez votre operation : addition ; multiplication ; soustraction ; division");
// function calculer (x,y, operation) {
//     if (operation === "addition")
//         return x + y;
//     else if (operation === "soustraction")
//         return x - y;
//     else if (operation === "multiplication")
//         return x * y;
//     else if (operation === "division") {
//         if (y === 0) {
//             console.log("Division impossible par 0");
//         } else {
//             return x / y;
//         }
            
//     }
// }
// add = calculer(x,y, operation)
// console.log(add)

a = Number(prompt("choisissez un premier nombre"));
b = Number(prompt("choisissez un second nombre"));
function calculette(a, b) {
    const operateur = prompt ("Choisissez votre opération : 1 / addition ; 2 / soustraction ; 3 / multiplication") ;
switch (operateur) {
        case "1":
            return a + b;
            
            break;
        case "2":
            return a - b;

            break;
        case "3":
            return a * b;
        
            break;
        default:
            break;
}
}

let calcul = calculette(a, b);
console.log(calcul);


const nav = document.querySelector("nav");
const main = document.querySelector("main");
const header = document.querySelector("header");
const footer = document.querySelector("footer");

// document.getElementById
// document.getElementsByName

function cacherElement(){
    nav.style.display = "none";
    main.style.display = "none";
    header.style.display = "none";
    footer.style.display = "none";
}

cacherElement();

function afficher() {
    nav.style.display = "";
    main.style.display = "";
    header.style.display = "";
    footer.style.display = "";
}

afficher();

