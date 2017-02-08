/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var entero
	var resultado
	var resultadodos

	entero=document.getElementById("importe").value;
	entero=parseInt(entero);

	resultado=entero*0.25;
	resultadodos=entero-resultado;

	document.getElementById("resultado").value=resultadodos;






}
