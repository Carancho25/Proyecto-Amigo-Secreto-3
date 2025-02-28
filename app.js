// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let titulo = document.querySelector("h1");
titulo.innerHTML = "Elige a tu Amigo Secreto";

let segundotitulo = document.querySelector ("h2");
segundotitulo.innerHTML = "Ingresa su nombre y dale clickear al boton Añadir";

let listaDeNombres = [];
listaDeNombres.push("null");


function agregarAmigos() {
    let nombre = document.getElementById("Amigo").value;
    console.log(nombre);
    if (nombre==="") {
        alert("EL NOMBRE INGRESADO ES INVALIDO");
        document.getElementById("Amigo").focus();        
    } else { 
    listaDeNombres.push(nombre);
    document.getElementById("Amigo").value="";
    document.getElementById("Amigo").focus();

    let li = 
    document.createElement("li");
    li.textContent = nombre;
    document.getElementById("listaAmigos").appendChild(li);    
    }

}


function sortearAmigo() {
    let valor2= generarAmigo();
    let = document.getElementById("resultado");
    resultado.innerHTML = `el amigo selecionado es "${listaDeNombres [valor2]}"`;
    setTimeout(()=> {
    vaciarLista();
    }, 5000);

}

function generarAmigo(){
    const lista = document.getElementById("listaAmigos");
    const cantidad = lista.children.length;
    const valor = Math.floor(Math.random() * cantidad +1);
    return valor;


}

function vaciarLista() {
    let vaciar = document.getElementById(`resultado`);
    vaciar.innerHTML = "";
    let lista = document.getElementById("listaAmigos");
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild); 
    }
    document.getElementById("Amigo").focus();
}


    

