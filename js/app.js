function siguienteTarjeta() {
    // Oculta la portada
    document.querySelector('.hero').style.display = 'none';

    // Muestra la sección de tarjetas
    document.getElementById('seccion-tarjetas').style.display = 'grid';
}

function volverInicio() {
    // Oculta las tarjetas
    document.getElementById('seccion-tarjetas').style.display = 'none';

    // Muestra otra vez la portada
    document.querySelector('.hero').style.display = 'flex';
}


function actualizarReloj() {
    const ahora = new Date();

    const horas = ahora.getHours().toString().padStart(2,'0');
    const minutos = ahora.getMinutes().toString().padStart(2,'0');
    const segundos = ahora.getSeconds().toString().padStart(2,'0');

    const horaActual = horas + ":" + minutos + ":" + segundos;

    document.getElementById("reloj").textContent = horaActual;
}

setInterval(actualizarReloj, 1000);


function reproducirFlecha() {
    const audio = document.getElementById("sonidoFlecha");
    audio.currentTime = 0; 
    audio.play();
}



const estrella = document.getElementById("estrella");
const audioEstrella = document.getElementById("sonidoEstrella");
const botonFormularios = document.getElementById("botonFormularios");

estrella.addEventListener("click", function() {
    
    audioEstrella.currentTime = 0;
    audioEstrella.play();

    
    botonFormularios.style.display = "block";
});


function abrirFormularioRegistro() {
    window.open(
        "https://docs.google.com/forms/d/e/1FAIpQLScz2gs6gHPO_nNphBjKR31NCkSFLuXSVfPWf1D1l3UWBh3P1w/viewform?usp=header",
    );
}

function abrirFormularioConsulta(){
document.getElementById("formularioConsulta").style.display="block";
}

function cerrarFormularioConsulta(){
document.getElementById("formularioConsulta").style.display="none";
}


function buscarUniversidad(){

let programa = document.getElementById("programa").value;
let resultado="";

if(programa=="Ingeniería"){
resultado="UNAM, IPN, Tecnológico de Monterrey";
}

else if(programa=="Medicina"){
resultado="UNAM, UDG, BUAP";
}

else if(programa=="Derecho"){
resultado="UNAM, Universidad Anáhuac";
}

else if(programa=="Arquitectura"){
resultado="Tecnológico de Monterrey";
}

else if(programa=="Administración"){
resultado="IPN, Universidad Anáhuac";
}

document.getElementById("resultados").innerHTML=
"<p><strong>Resultados:</strong><br>"+resultado+"</p>";

}











let universidades = [

{nombre:"UNAM", programa:"Ingeniería", costo:"Pública", requisito:"Examen de admisión"},
{nombre:"UNAM", programa:"Salud", costo:"Pública", requisito:"Examen de admisión"},
{nombre:"UNAM", programa:"Ciencias Sociales", costo:"Pública", requisito:"Examen de admisión"},
{nombre:"UNAM", programa:"Humanidades", costo:"Pública", requisito:"Examen de admisión"},

{nombre:"IPN", programa:"Ingeniería", costo:"Pública", requisito:"Examen de admisión"},
{nombre:"IPN", programa:"Salud", costo:"Pública", requisito:"Examen de admisión"},
{nombre:"IPN", programa:"Administración", costo:"Pública", requisito:"Examen de admisión"},

{nombre:"Tecnológico de Monterrey", programa:"Ingeniería", costo:"Privada", requisito:"Entrevista"},
{nombre:"Tecnológico de Monterrey", programa:"Administración", costo:"Privada", requisito:"Entrevista"},
{nombre:"Tecnológico de Monterrey", programa:"Ciencias Sociales", costo:"Privada", requisito:"Entrevista"},
{nombre:"Tecnológico de Monterrey", programa:"Arquitectura", costo:"Privada", requisito:"Entrevista"},
{nombre:"Tecnológico de Monterrey", programa:"Humanidades", costo:"Privada", requisito:"Entrevista"},
{nombre:"Tecnológico de Monterrey", programa:"Salud", costo:"Privada", requisito:"Entrevista"},

{nombre:"UAM", programa:"Arquitectura", costo:"Pública", requisito:"Examen de admisión"},
{nombre:"UAM", programa:"Ingeniería", costo:"Pública", requisito:"Examen de admisión"},
{nombre:"UAM", programa:"Salud", costo:"Pública", requisito:"Examen de admisión"},
{nombre:"UAM", programa:"Comunicación", costo:"Pública", requisito:"Examen de admisión"},
{nombre:"UAM", programa:"Ciencias Sociales", costo:"Pública", requisito:"Examen de admisión"},

{nombre:"UDG", programa:"Salud", costo:"Pública", requisito:"Promedio mínimo"},
{nombre:"UDG", programa:"Ingeniería", costo:"Pública", requisito:"Promedio mínimo"},
{nombre:"UDG", programa:"Administración", costo:"Pública", requisito:"Promedio mínimo"},
{nombre:"UDG", programa:"Ciencias Sociales", costo:"Pública", requisito:"Promedio mínimo"},
{nombre:"UDG", programa:"Arquitectura", costo:"Pública", requisito:"Promedio mínimo"},

{nombre:"BUAP", programa:"Salud", costo:"Pública", requisito:"Examen de admisión"},
{nombre:"BUAP", programa:"Ingeniería", costo:"Pública", requisito:"Examen de admisión"},
{nombre:"BUAP", programa:"Ciencias Sociales", costo:"Pública", requisito:"Examen de admisión"},
{nombre:"BUAP", programa:"Administración", costo:"Pública", requisito:"Examen de admisión"},
{nombre:"BUAP", programa:"Comunicación", costo:"Pública", requisito:"Examen de admisión"},

{nombre:"IBERO", programa:"Arquitectura", costo:"Privada", requisito:"Entrevista"},
{nombre:"IBERO", programa:"Ingeniería", costo:"Privada", requisito:"Entrevista"},
{nombre:"IBERO", programa:"Administración", costo:"Privada", requisito:"Entrevista"},
{nombre:"IBERO", programa:"Salud", costo:"Privada", requisito:"Entrevista"},
{nombre:"IBERO", programa:"Derecho", costo:"Privada", requisito:"Entrevista"},
{nombre:"IBERO", programa:"Humanidades", costo:"Privada", requisito:"Entrevista"},

{nombre:"UANL", programa:"Ingeniería", costo:"Pública", requisito:"Examen de admisión"},
{nombre:"UANL", programa:"Salud", costo:"Pública", requisito:"Examen de admisión"},
{nombre:"UANL", programa:"Ciencias Sociales", costo:"Pública", requisito:"Examen de admisión"},
{nombre:"UANL", programa:"Administración", costo:"Pública", requisito:"Examen de admisión"},

{nombre:"Universidad Anáhuac", programa:"Administración", costo:"Privada", requisito:"Entrevista"},
{nombre:"Universidad Anáhuac", programa:"Ingeniería", costo:"Privada", requisito:"Entrevista"},
{nombre:"Universidad Anáhuac", programa:"Salud", costo:"Privada", requisito:"Entrevista"},
{nombre:"Universidad Anáhuac", programa:"Comunicación", costo:"Privada", requisito:"Entrevista"},
{nombre:"Universidad Anáhuac", programa:"Derecho", costo:"Privada", requisito:"Entrevista"},

{nombre:"UV", programa:"Salud", costo:"Pública", requisito:"Promedio mínimo"},
{nombre:"UV", programa:"Ingeniería", costo:"Pública", requisito:"Promedio mínimo"},
{nombre:"UV", programa:"Administración", costo:"Pública", requisito:"Promedio mínimo"},
{nombre:"UV", programa:"Humanidades", costo:"Pública", requisito:"Promedio mínimo"},
{nombre:"UV", programa:"Artes", costo:"Pública", requisito:"Promedio mínimo"},

{nombre:"La Salle", programa:"Administración", costo:"Privada", requisito:"Entrevista"},
{nombre:"La Salle", programa:"Arquitectura", costo:"Privada", requisito:"Entrevista"},
{nombre:"La Salle", programa:"Derecho", costo:"Privada", requisito:"Entrevista"},
{nombre:"La Salle", programa:"Humanidades", costo:"Privada", requisito:"Entrevista"},
{nombre:"La Salle", programa:"Ingeniería", costo:"Privada", requisito:"Entrevista"},
{nombre:"La Salle", programa:"Salud", costo:"Privada", requisito:"Entrevista"},

{nombre:"UAQ", programa:"Ingeniería", costo:"Pública", requisito:"Examen de admisión"},
{nombre:"UAQ", programa:"Salud", costo:"Pública", requisito:"Examen de admisión"},
{nombre:"UAQ", programa:"Derecho", costo:"Pública", requisito:"Examen de admisión"},
{nombre:"UAQ", programa:"Administración", costo:"Pública", requisito:"Examen de admisión"},
{nombre:"UAQ", programa:"Psicología", costo:"Pública", requisito:"Examen de admisión"},
{nombre:"UAQ", programa:"Ciencias Naturales", costo:"Pública", requisito:"Examen de admisión"},
{nombre:"UAQ", programa:"Humanidades", costo:"Pública", requisito:"Examen de admisión"}

];



function buscarUniversidad(){

let programa = document.getElementById("programa").value;
let costo = document.getElementById("costo").value;
let requisito = document.getElementById("requisitos").value;

let resultados="";

for(let i=0; i<universidades.length; i++){

if(universidades[i].programa==programa &&
universidades[i].costo==costo &&
universidades[i].requisito==requisito){

resultados += universidades[i].nombre+"<br>";

}

}

if(resultados==""){
resultados="No se encontraron universidades con esos criterios";
}

document.getElementById("resultados").innerHTML=
"<p><strong>Universidades encontradas:</strong><br>"+resultados+"</p>";

}
