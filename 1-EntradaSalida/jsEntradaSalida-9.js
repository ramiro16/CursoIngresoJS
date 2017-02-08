/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
	var importe
	var resultado
	var resultadodos

	importe=document.getElementById("sueldo").value;
	importe=parseInt(importe);

	resultado=importe/10;
	resultadodos=resultado+importe;

	document.getElementById("resultado").value=resultadodos;




}
