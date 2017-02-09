function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var num;

	num=parseInt(num);
	num=parseInt(Math.random()*(11-1)+1);

	if(num>=9)
	{
		alert("Excelente");
	}

	else{

			if(num>=4)
			{

				alert("APROBÓ");

			}

			else{

				alert("Vamos, la proxima se puede");

				}

		}


}//FIN DE LA FUNCIÓN