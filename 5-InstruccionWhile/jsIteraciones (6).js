function Mostrar()
{

var contador = 0;

var num;

var acumulador = 0;

while(contador<5)
	{

		contador++;

		num=prompt("Ingrese un numero");

		num = parseInt(num);

		acumulador += num;


	}

	promedio = acumulador / contador;

	document.getElementById("suma").value=acumulador;

	document.getElementById("promedio").value=promedio;

}//FIN DE LA FUNCIÓN