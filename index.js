
// escucha el valor del input tipe range por id e e innerhtml en etiqueta: 
const range = document.getElementById('range');
const etiqueta = document.querySelector('.etiqueta_log');

range.addEventListener('input', function() {
    let long_contra = (parseInt(range.value)+8);
    etiqueta.innerHTML = long_contra;
    range.style.setProperty("--value", (parseInt(range.value))); 
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

const c_mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const c_munisculas = 'abcdefghijklmnopqrstuvwxyz';
const c_numeros = '0123456789';
const c_caracteres = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

boton_generar.addEventListener('click', function() {

    let long_contra = (parseInt(range.value)+8);
    let contra = '';
    
    //si las casillas de mayusculas, minusculas, numeros y caracteres estan activas, se agregan a la variable sum_caracteres:
    function caracteres() {
    let sum_caracteres = '';
    if (mayusculas.checked) {
        sum_caracteres += c_mayusculas;
    }
    if (minusculas.checked) {
        sum_caracteres += c_munisculas;
    }
    if (numeros.checked) {
        sum_caracteres += c_numeros;
    }
    if (symbols.checked) {
        sum_caracteres += c_caracteres;
    }
    return sum_caracteres;
    }
    
   //se genera la contraseña aleatoria:
    for (let i = 0; i < long_contra; i++) {
        let random = Math.floor(Math.random() * caracteres().length);
        
        contra += caracteres()[random];
    }
    contra_generada.value = contra;
    
    //alerta
    if (caracteres().length == 0) {
        alert('Por favor, seleccione al menos una opción');
    }

});





















