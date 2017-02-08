/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

function Sumar () 
{

	var num1
	var num2
	var num3
	
	num1=document.getElementById("PrecioUno").value;
	num2=document.getElementById("PrecioDos").value;
	num3=document.getElementById("PrecioTres").value;

	num1=parseInt(num1)
	num2=parseInt(num2)
	num3=parseInt(num3)
	
	var resultado1
	resultado1=num1+num2+num3

	alert(resultado1)
}
function Promedio () 
{

	num1=document.getElementById("PrecioUno").value;
	num2=document.getElementById("PrecioDos").value;
	num3=document.getElementById("PrecioTres").value;

	num1=parseInt(num1)
	num2=parseInt(num2)
	num3=parseInt(num3)

	var resultado2
	resultado2=(num1+num2+num3)/3

	alert(resultado2)
	
}
function PrecioFinal () 
{
	num1=document.getElementById("PrecioUno").value;
	num2=document.getElementById("PrecioDos").value;
	num3=document.getElementById("PrecioTres").value;

	num1=parseInt(num1)
	num2=parseInt(num2)
	num3=parseInt(num3)

	resultado4=parseInt(resultado4)

	var resultado3
	var resultado4

	resultado3=(num1+num2+num3)*0.21
	resultado4=(num1+num2+num3)+resultado3

	alert(resultado4)

}