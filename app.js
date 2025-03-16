// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let lista = document.getElementById('listaAmigos');

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    
    //console.log (nombreAmigo);
    //console.log (document.getElementById('amigo').value.trim());
    if (nombreAmigo ==='') {
        alert("el nombre no puede estar en blanco");
    } else {
        amigos.push(nombreAmigo);
        document.getElementById('amigo').value =""; 
        crearLista();
    }
}

function crearLista() {
    lista.innerHTML = "";
    for ( let i=0;i<= amigos.length -1; i++) {
        console.log(i);
        lista.innerHTML +=`<li>${amigos[i]}</li>`; 
        console.log(lista.innerHTML);     
    }    
}
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("debes haber ingresado almenos un nombre de amigo");
    } else {
        let amigoSorteado =  Math.floor(Math.random()*amigos.length-1)+1;
        console.log (amigoSorteado);
        document.getElementById('resultado').innerHTML += `<li>${amigos[amigoSorteado]}</li>`;
    }
}