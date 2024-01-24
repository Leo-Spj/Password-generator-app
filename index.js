import { generarPassword } from 'generador-de-contrasenas';


window.addEventListener('touchend', function(event) {
    if (event.detail === 2) {  // si es un doble tap
        event.preventDefault();  // prevenir el comportamiento predeterminado
    }
});

document.querySelector('main').addEventListener('dblclick', function(event) {
    event.preventDefault();
});



// escucha el valor del input tipe range por id e e innerhtml en etiqueta: 
const range = document.getElementById('range');
const etiqueta = document.querySelector('.etiqueta_log');
var fortaleza_rango = 0;
range.addEventListener('input', function() {
    let long_contra = (parseInt(range.value)+8);
    etiqueta.innerHTML = long_contra;
    range.style.setProperty("--value", (parseInt(range.value)));
    
    
    // actualizando rango de fortaleza:
    if (long_contra > 13 && fortaleza_check > 0){ 
            fortaleza_rango = 1;
            fortaleza();
    } else {
        fortaleza_rango = 0;
        fortaleza();        
    }
});
range.style.setProperty("--value", (parseInt(range.value)));



//al clicar en icono_copy, se copia el contenido de contra_generada en el portapapeles:
const contra_generada = document.getElementById('contra_generada');
const icono_copy = document.getElementById('icono_copy');

icono_copy.addEventListener('click', function() {
    contra_generada.select();
    document.execCommand("copy");

    alert("Contraseña copiada al portapapeles");
});



//al clicar en boton_generar, se genera una contraseña aleatoria:
const boton_generar = document.getElementById('boton_generar');

const mayusculas = document.getElementById('include-uppercase');
const minusculas = document.getElementById('include-lowercase');
const numeros = document.getElementById('include-numbers');
const symbols = document.getElementById('include-symbols');


boton_generar.addEventListener('click', function() {
    let long_contra = parseInt(range.value) + 8;

    // La funcion generarPassword la cree como un paquete NPM
    let contra = generarPassword(
        long_contra,
        mayusculas.checked,
        minusculas.checked,
        numeros.checked,
        symbols.checked
    );
    contra_generada.value = contra;

    // alerta
    if (contra.length === 0) {
        contra_generada.value = "🤢🤢🤢";
    }
});


//escuchar los eventos de los checkbox
//  contador = 3 dado que la pagina carga con 3 casillas marcadas.
var contador = 3;
var fortaleza_check = 2;
var checkbox = document.querySelectorAll('input[type=checkbox]');
for (var i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener('change', function () {
        if (this.checked) {
            contador++;
            console.log("casillas activas: " + contador);
            
        } else {
            contador--;
            console.log("casillas activas: " + contador);
        }

        if (contador == 0) {
            fortaleza_check = 0;
            console.log("fortaleza: " + fortaleza_check);
        }
        if (contador == 1) {
            fortaleza_check = 1;
            console.log("fortaleza: " + fortaleza_check);
        }
        if (contador == 2) {
            fortaleza_check = 1 ;
            console.log("Fortaleza checkbx: " + fortaleza_check);
        }
        if (contador == 3) {
            fortaleza_check = 2;
            console.log("Fortaleza checkbx: " + fortaleza_check);
        }
        if (contador == 4) {
            fortaleza_check = 3;
            console.log("Fortaleza checkbx: " + fortaleza_check);
        } 

        fortaleza()
    });
}

//segun la cantidad de fortaleza_check  se añade la clase "activo" a los div barra_niv:
const niv_fort_escrita = document.getElementById('niv_fort_escrita');

const barra_n_1 = document.getElementById('br_1');
const barra_n_2 = document.getElementById('br_2');
const barra_n_3 = document.getElementById('br_3');
const barra_n_4 = document.getElementById('br_4');


fortaleza()
function fortaleza() {
    if (fortaleza_check != 0 && fortaleza_check + fortaleza_rango == 1) {
        barra_n_1.classList.add('activado');
        barra_n_2.classList.remove('activado');
        barra_n_3.classList.remove('activado');
        barra_n_4.classList.remove('activado');

        niv_fort_escrita.innerHTML = "LOW";
    } else if (fortaleza_check + fortaleza_rango == 2) {
        barra_n_1.classList.add('activado');
        barra_n_2.classList.add('activado');
        barra_n_3.classList.remove('activado');
        barra_n_4.classList.remove('activado');

        niv_fort_escrita.innerHTML = "MEDIUM";
    } else if (fortaleza_check + fortaleza_rango == 3) {
        barra_n_1.classList.add('activado');
        barra_n_2.classList.add('activado');
        barra_n_3.classList.add('activado');
        barra_n_4.classList.remove('activado');

        niv_fort_escrita.innerHTML = "HIGH";
    } else if (fortaleza_check + fortaleza_rango == 4) {
        barra_n_1.classList.add('activado');
        barra_n_2.classList.add('activado');
        barra_n_3.classList.add('activado');
        barra_n_4.classList.add('activado');

        niv_fort_escrita.innerHTML = "STRONG";
    } else{
        barra_n_1.classList.remove('activado');
        barra_n_2.classList.remove('activado');
        barra_n_3.classList.remove('activado');
        barra_n_4.classList.remove('activado');

        niv_fort_escrita.innerHTML = "Niv.";
    }
}





//se carga la pagina con una contraseña aleatoria de mayusculas, minusculas y numeros.
contra_generada.value = generarPassword(10, true, true, true, false);












