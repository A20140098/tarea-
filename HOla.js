var scor = 0;
alert("Bienvenidos al formulario");
var pre1 =prompt("Que fecha es el festival de primavera? \nA 10 de febrero \nB 5 de abril \nC 2 de mayo");
if (pre1 == "A") {
    scor = scor + 10;
}
else if(pre1 == "B" || pre1 == "C"){
    scor = scor -5;
}
else { 
    alert("Eso no es una respuesta ")
}
console.log ("Tu scor fue :"+scor);
document.write ("Tu scor fue :"+scor);s