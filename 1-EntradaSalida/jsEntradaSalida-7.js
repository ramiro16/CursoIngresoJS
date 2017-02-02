/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numuno
	var numdos
	numuno=document.getElementById("numeroUno").value;
	numdos=document.getElementById("numeroDos").value;
	numuno=parseInt(numuno);
	numdos=parseInt(numdos);
	resultado=numuno+numdos;

	alert("la suma es "+resultado);
	
}

function restar()
{
	var numuno
	var numdos
	numuno=document.getElementById("numeroUno").value;
	numdos=document.getElementById("numeroDos").value;
	numuno=parseInt(numuno);
	numdos=parseInt(numdos);
	resultado=numuno-numdos;

	alert("la resta es "+resultado);
}

function multiplicar()
{ 
	var numuno
	var numdos
	numuno=document.getElementById("numeroUno").value;
	numdos=document.getElementById("numeroDos").value;
	numuno=parseInt(numuno);
	numdos=parseInt(numdos);
	resultado=numuno*numdos;

	alert("la multiplicacion es "+resultado);
}

function dividir()
{
	var numuno
	var numdos
	numuno=document.getElementById("numeroUno").value;
	numdos=document.getElementById("numeroDos").value;
	numuno=parseInt(numuno);
	numdos=parseInt(numdos);
	resultado=numuno/numdos;

	alert("la division es "+resultado);
}

