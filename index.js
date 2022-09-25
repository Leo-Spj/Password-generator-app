
// escucha el valor del input tipe range por id e e innerhtml en etiqueta: 
const range = document.getElementById('range');
const etiqueta = document.querySelector('.etiqueta_log');

range.addEventListener('input', function() {
    let long_contra = (parseInt(range.value)+8);
    etiqueta.innerHTML = long_contra;
    range.style.setProperty("--value", (parseInt(range.value))); 
});

range.style.setProperty("--value", (parseInt(range.value)))
