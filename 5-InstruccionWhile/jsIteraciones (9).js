function Mostrar()
{
// declarar variables

var numero;
var respuesta;
var max;
var min;
var primera = true;

while(respuesta != false)
	{
		numero = prompt("Ingrese su numero");
		numero = parseInt(numero);

		respuesta = confirm("¿Desea agregar otro numero?");

		if(primera)  // <-----Bandera */
			{

				max = numero;
				min = numero;
				primera = false; // <---- valor cambiado de la bandera, para que no vuelva entrar */

			}

			else
				{
					if(numero > max)
					{

						

					}


					if(numero < min)
					{

						

					}


				}
 


				document.getElementById("maximo").value=max;
				document.getElementById("minimo").value=min;



	}
	



}//FIN DE LA FUNCIÓN