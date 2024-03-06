
let numeroSecreto = 0;
let intentos = 0;
let listaNumeros = [];
let numeroMaximo = 10;

function asignarTextAlElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function condicionesIniciales() {
    asignarTextAlElemento('h1', 'Juego del numero secreto');
    asignarTextAlElemento('p', `Ingresa un numero entre el 1 y el ${numeroMaximo}`);
    document.getElementById('intentar').removeAttribute('disabled');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
};

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    console.log(numeroGenerado);
    console.log(listaNumeros);

    if (listaNumeros.length == numeroMaximo) {
        asignarTextAlElemento('p', 'Ya se sortearon todos los numeros posibles!');
        document.getElementById('intentar').setAttribute('disabled','true');
    } else {
        if (listaNumeros.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumeros.push(numeroGenerado);
            return numeroGenerado;
        };
    }

};

function limpiarInput() {
    document.querySelector('#valorUsuario').value = '';
};

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroSecreto === numeroUsuario) {
        asignarTextAlElemento('p', `Acertaste el numero en ${intentos} ${(intentos == 1) ? 'intento!' : 'intentos!'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroSecreto > numeroUsuario) {
            asignarTextAlElemento('p', 'El numero es mayor');
        } else {
            asignarTextAlElemento('p', 'El numero es menor');
        }
        intentos++;
        limpiarInput();
    }
};


function reiniciarJuego() {
    //limpiar caja
    limpiarInput();
    //reestablecer texto de intervalo de num
    //generar num aleatorio
    //reestablecer cant de intentos
    condicionesIniciales();
    //deshabilitar boton juego nuevo
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

};

condicionesIniciales();


//EJERCICIOS

// let lenguajesDeProgramacion = [];
// lenguajesDeProgramacion.push('Javascript','C','C++','Kotling','Python');

// lenguajesDeProgramacion.push('Java','Ruby','GoLang');
// console.log(lenguajesDeProgramacion);

// lenguajesDeProgramacion.forEach(element => {
//     console.log(element)
// });

// function lenguajesReversa(){
//     for (let i = lenguajesDeProgramacion.length-1; i >= 0; i--){
//         console.log(lenguajesDeProgramacion[i])
//     }
// };
// lenguajesReversa();

//let numeros = [, 2, 3, 4, 5, 6, 7, 8, 5, 3, 2, 4];
// function calcularPromediosDeArray(array){
//     let suma = 0;
//     let cont = 0;
//     array.forEach(num => {
//         suma = suma + num;
//         cont ++;
//     });
//     console.log('El promedio de los numeros del array es: '+ suma/cont);
// }
// calcularPromediosDeArray(numeros);


// function maxymin (array){
//     let max = array[1];
//     let min = array[1];
//     array.forEach(num => {

//         if(num>max){
//             max=num;
//         } else if(num<min){
//             min=num;
//         };
//     });
//     console.log('El numero maximo es: '+ max +' y el numero minimo es: '+min);
// };
// maxymin(numeros);

// function existeElemento(array, element) {
// let index = array.indexOf(element);
// return index;
// };

// let array = ['gato', 'perro','pajaro','conejo'];
// let element = 'gato';
// let index = existeElemento(array,element);
// console.log(`El index del elemento buscado "${element}" es "${index}"`);
