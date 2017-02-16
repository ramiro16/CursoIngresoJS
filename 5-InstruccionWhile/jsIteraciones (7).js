function Mostrar()
{

var numero;
var contador = 0;
var acumulador = 0;
var respuesta;

while(respuesta != false)

	{	
		
		contador++;

		numero = prompt("Ingrese su numero");
		numero = parseInt(numero);

	

		acumulador += numero;
		respuesta = confirm("Desea agregar otro numero?");


	}


		document.getElementById("suma").value = acumulador;
		document.getElementById("promedio").value = acumulador/contador;

}//FIN DE LA FUNCIÓN
	



