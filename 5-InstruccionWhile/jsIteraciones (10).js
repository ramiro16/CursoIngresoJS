function Mostrar()
{
//declarar contadores y variables 
var numero;

var negativos;
var positivos;

var contadorpos = 0;
var contadorneg = 0;

var acumuladorpos = 0;
var acumuladorneg = 0;

var respuesta;

	while(respuesta != false)
	{

		contadorneg--;

		numero = prompt("Ingrese su numero");
		numero = parseInt(numero);

		respuesta = confirm("¿Desea agregar otro numero?");

		if(numero < 0)
		{

			acumuladorneg += numero;


		}


	}


}//FIN DE LA FUNCIÓN