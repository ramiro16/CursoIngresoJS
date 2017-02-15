function Mostrar()
{

var num = 0;

var numing;

var acumulador = 0;

while(num<5)
	{

		num++;

		numing=prompt("Ingrese un numero");

		numing = parseInt(numing);

		acumulador += numing;


	}

	promedio = acumulador / num;

	document.getElementById("suma").value=acumulador;

	document.getElementById("promedio").value=promedio;

}//FIN DE LA FUNCIÓN