function Mostrar()
{
	var contador = 0;
	var acumulador = 0;
	var acumuladordos = 1;
	var numero;
	var respuesta;

	while(respuesta != false)
		{
			numero = prompt("Ingrese el numero");
			numero = parseInt(numero);

			respuesta = confirm("¿Desea agregar otro numero?");


			if(numero >= 0)
			{

				acumulador += numero;


			}

			else
			{


				acumuladordos *= numero;


			}



		}

		document.getElementById("suma").value=acumulador;
		document.getElementById("producto").value=acumuladordos;
	
}//FIN DE LA FUNCIÓN