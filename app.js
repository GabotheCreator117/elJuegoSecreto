//Asignar texto a una etiqueta
function asignarTextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}
asignarTextoElemento('h1','Juego adivina el numero');
asignarTextoElemento('p','Indica un numero del 1 al 10!');

let numeroMaximoSecreto = 10;
let listaNumerosSorteados = [];
//Funcion para generar numero secreto
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximoSecreto)+1;
    //Si ya llegamos al numero maximo de sorteos
    //Asi recorremos todo nuestro vector
    if (listaNumerosSorteados.length == numeroGenerado){
        asignarTextoElemento('h1','Ya has sorteado todos los numeros posibles');

    }else{

        //Si el numero esta en el arreglo, debe de generar otro
        if (listaNumerosSorteados.includes(numeroGenerado)){
            //Recursividad
            return generarNumeroSecreto();
        }else{
            //Sino lo guarda en el arreglo
            //Asi guardamos hasta el final un valor en el arreglo
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }    
}

let numeroSecreto = generarNumeroSecreto();
let intentos = 1;

//Funcion limpiar caja
function limpiarCaja(){
    //Seleccionar por ID
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
}

function verificarIntento(){
    //Funcion para obtener solo por "id"
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}`);
        //Cuando el usuario no acierte vamos a remover el "disable" para que pueda reiniciar el juego
        document.getElementById('reiniciar').removeAttribute('disabled');
    //El usuario no acerto    
    }else if( numeroDeUsuario > numeroSecreto){
        asignarTextoElemento('p', 'El numero secreto es menor ');
    }else{
        asignarTextoElemento('p', 'El numero secreto es mayor ');
    }
    intentos++
    return numeroDeUsuario;
}

function mensajesIniciales() {
    asignarTextoElemento('h1','Juego adivina el numero');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximoSecreto}!`);
    //generar numero secreto
    numeroSecreto = generarNumeroSecreto();
    //Inicializar el numero de intentos
    intentos =1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //mensajes de inicio
    //generar numero secreto
    //Inicializar el numero de intentos
    mensajesIniciales();
    //desabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}
//Arreglos
