//* Ejercicio 1

let colaOriginal = ['amarillo', 'rosa', 'rojo', 'verde', 'azul', 'negro', 'morado', 'blanco'];
let cola1 = colaOriginal.filter((color, index) => index % 2 === 0) //amarillo, rojo, azul, morado
let cola2 = colaOriginal.filter((color, index) => index % 2 !== 0) // rosa, verde, negro, blanco

console.log('Cola 1:', cola1);
console.log('Cola 2:', cola2);

//* Ejercicio 2

let usuarios = [
    { user: 'User1', ticket: true },
    { user: 'User2', ticket: true },
    { user: 'User3', ticket: false },
    { user: 'User4', ticket: true },
    { user: 'User5', ticket: false },
    { user: 'User6', ticket: false },
    { user: 'User7', ticket: true },
    { user: 'User8', ticket: true },
    { user: 'User9', ticket: true },
    { user: 'User10', ticket: false },
    { user: 'User11', ticket: true },
];

//TODO: Sacar a la gente que no tiene ticket, solo imprimirá los resultados de Users con valores "true"

let colaFinal = usuarios.filter(usuario => usuario.ticket);

console.log('Cola Final:', colaFinal);
