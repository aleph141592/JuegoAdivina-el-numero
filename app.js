let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo=10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento)
    elementoHTML.innerHTML = texto;
    return;
}
function verificaIntento(){
    //let numeroUsuario = document.querySelector('input')
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    

    if(numeroSecreto === numeroUsuario){
        asignarTextoElemento('p',`Acertaste en ${intentos} ${(intentos===1)?'intento':'intentos'}, boludo!`);
        document.getElementById('reiniciar').removeAttribute('disabled')
        //No acertó aún 
    } else{
        if(numeroUsuario<numeroSecreto){
            asignarTextoElemento('p',`El número es mayor...`);
        }else{
            asignarTextoElemento('p','El número es menor...');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
   document.querySelector('#valorUsuario').value='';
}


function generaNumeroSecreto(){
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento('p','Ya se asignaron todos los números posibles')
    }else{

        //si el numero esta en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
        return generaNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', "Mi gran juego")
    asignarTextoElemento('p', `Introduce un número del 1-${numeroMaximo}`)
    numeroSecreto = generaNumeroSecreto();
    intentos = 1; 
}

function reiniciarJuego(){
    //Limpiar caja
    limpiarCaja();
    //reiniciar mensaje
    //generar el numero aleatorio
    //inicializar numero de intentos
    condicionesIniciales();
    //deshabilitar el boton
    document.querySelector('#reiniciar').setAttribute('disabled','True');
}

condicionesIniciales();
