
//para el input
  var Input = document.querySelector('#input1');
  Input.style.setProperty("--value", Input.value);

  if (Input) {

    var w = parseInt(window.getComputedStyle(Input, null).getPropertyValue('width'));

    

    Input.addEventListener("input", 
        function(evt) {
            Input.style.setProperty("--value", Input.value);
        }, 
    false);

    //para la etiqueta
    var etq = document.querySelector('.etiqueta');
    if (etq) {
        
        etq.innerHTML =parseInt(Input.value)+8;

        
        Input.addEventListener('input', function() {
        
            etq.innerHTML = parseInt(Input.value)+8;
            
        }, false);
    }
}