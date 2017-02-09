function Mostrar()
{
//tomo la edad  
	var años;
	años=document.getElementById("edad").value;

	if(años>=18)
	{

		alert("Esta persona es mayor de edad");
	}

	else
		{
			if(años>=13&&años<=17)
			{

			alert("Esta persona es adolescente");

			}
		
			else{

			alert("Esta persona es un niño");

				}

		}

	
}//FIN DE LA FUNCIÓN