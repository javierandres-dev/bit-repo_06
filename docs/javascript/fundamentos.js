// Esto es un comentario JS de una línea
/*
  Esto es un comentario
  JS
  multi-línea
*/
//alert('Hola, desde archivo externo.');
//console.log('Hola, desde archivo externo.');

// VARIABLES
/*
manera1 = 1;
var manera2 = 2;
let manera3 = 3;
const manera4 = 4;
console.log(manera1);
console.log(manera2);
console.log(manera3);
console.log(manera4);
manera1 = 10;
console.log(manera1);
manera2 = 20;
console.log(manera2);
manera3 = 30;
console.log(manera3);
manera4 = 40;
console.log(manera4);
*/

// Ámbito de las variables
// ámbito global
/*
const nombre = 'pepita';
{
  // contenido del bloque
  // ámbito local
  console.log(nombre);
  const apellido = 'pérez';
  let sobrenombre = 'pepa';
  console.log(sobrenombre);
}
console.log(apellido);
*/

// Modo estricto
'use strict';
/*
nombre = 'pepita';
console.log(nombre);
*/

// Tipos de dato primitivos
/*
let miVariable = 'pepita'; // string "" '' ``
miVariable = 1; // number
miVariable = true; // boolean
miVariable = null; // null (bug)
miVariable = undefined; // undefined
console.log(miVariable);
console.log(typeof miVariable);
*/

// Conversión de tipos
/*
let miVariable = 1;
console.log(miVariable);
console.log(typeof miVariable);
miVariable = miVariable.toString();
console.log(miVariable);
console.log(typeof miVariable);
miVariable = Number(miVariable);
console.log(miVariable);
console.log(typeof miVariable);
*/

// Truthy and Falsy
// verdadero
/*
console.log(Boolean(true));
console.log(Boolean(1));
console.log(Boolean(-1));
console.log(Boolean('a'));
*/
// falso
/*
console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(undefined));
*/

// Métodos de interacción
/*
// entrada
const nombre = prompt('Escriba su nombre:');
const siOno = confirm('¿Acepta continuar?');
// salida
console.log(nombre);
console.log(typeof nombre);
console.log(siOno);
console.log(typeof siOno);
document.write(nombre);
alert(siOno);
*/

// Tipos de dato no primitivos
// TNP. Arreglo.
/*
const miArreglo = ['a', 'b', 'c', 'd'];
console.log(miArreglo);
console.log(miArreglo[1]);
console.log(typeof miArreglo);
console.log(miArreglo instanceof Array);
const miArreglo = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(miArreglo.length);

for (let index = 0; index < miArreglo.length; index++) {
  const element = miArreglo[index];
  console.log('for:', element);
}

let indice = 0;
while (indice < miArreglo.length) {
  const elemento = miArreglo[indice];
  console.log('while:', elemento);
  indice++;
}
*/

// TNP. Objeto.
/*
const miObjetoVacio = {};
const miObjeto = {
  apellido: 'pérez',
  llave: 'valor',
  nombre: 'pepita',
  cantidadHijos: 2,
  activo: true,
  pasatiempos: ['leer', 'escuchar música'],
  altura: 1.5,
  telefono: null,
  fechaNacimiento: new Date('December 17, 2003'),
  saludar: function () {
    console.log('hola, soy un método');
  },
};
console.log(miObjeto);
console.log(miObjeto.nombre);
console.log(miObjeto['apellido']);
miObjeto.saludar();
miObjeto.cantidadHijos = 3;
miObjeto.peso = 50;
delete miObjeto.llave;
*/

// Destructurar
/*
const arregloNevera = [
  'hielo',
  'leche',
  'jamón',
  'lechuga',
  'tomate',
  'ajo',
  'queso',
];
const [bebida1, bebida2] = arregloNevera;
console.log(bebida1, bebida2);

const objetoNevera = {
  a: 'hielo',
  b: 'leche',
  c: 'jamón',
  d: 'lechuga',
  e: 'tomate',
  f: 'ajo',
  g: 'queso',
};
const { c, d, e, g } = objetoNevera;
console.log(c, d, e, g);
*/

// Operador Spread
/*
const arrEllas = ['Darly', 'Laura'];
const arrEllos = [
  'Andrés Martinez',
  'Brian',
  'Leonhard',
  'Gabriel',
  'C Molano',
  'C Castro',
  'J Moncada',
  'Nicolas',
  'J Anaya',
  'Frank',
];
console.log([...arrEllas, ...arrEllos]);
const numeros = [10, 15, 20];
function sumarTresNumeros(n1, n2, n3) {
  console.log(n1 + n2 + n3);
}
sumarTresNumeros(...numeros);
*/
