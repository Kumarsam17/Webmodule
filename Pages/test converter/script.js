let celcius = document.getElementById('celcius');
let farhenheit = document.getElementById('farhenheit');
celcius.oninput = function() {
    let output = (parseFloat(celcius.value)*9)/5+32;
    farhenheit.value =parseFloat(output.toFixed(2) + "F");
    console.log(farhenheit.value);
};
farhenheit.oninput = function() {
    let output = (parseFloat(farhenheit.value)-32)*5/9;
    celcius.value =parseFloat(output.toFixed(2) + "F");
    console.log(celcius.value);
};