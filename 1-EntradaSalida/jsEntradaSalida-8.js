/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numerouno
	var numerodos
	var resto

	numerouno=document.getElementById("numeroDividendo").value;
	numerodos=document.getElementById("numeroDivisor").value;

	numerouno=parseInt(numerouno);
	numerodos=parseInt(numerodos);
	resto=numerouno%numerodos;

	alert("el resto es "+resto);
}
