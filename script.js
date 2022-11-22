<!DOCTYPE html>
<html>
    <head>
        <title>Exemplo com Script</title>
        <link href="./style.css" rel="stylesheet">
    </head>
<body>


<form id="formulario">
    <h2 id="demo"></h2>
    <input type="number" placeholder="Digite um número" id="number1"> 
    <input type="number" placeholder="Digite um número" id="number2"> 
    <input type="number" placeholder="Digite um número" id="number3"> 
    <input type="submit" value="Enviar">
</form>

<script>

var form = document.getElementById('formulario');
let N1 = document.getElementById('number1');
let N2 = document.getElementById('number2');
let N3 = document.getElementById('number3');

form.addEventListener('submit', function(e) {
    // VERIFICA SE É PAR
    //if(a.value%2==0){
    document.getElementById("demo").innerHTML = 'Maior='+N1.value+' Meio='+N2.value+' Menor='+N3.value;
   /* }
    else{
    document.getElementById("demo").innerHTML = 'IMPAR';
    }*/
    // impede o envio do form
    e.preventDefault();
});
</script> 
</body>
</html>
