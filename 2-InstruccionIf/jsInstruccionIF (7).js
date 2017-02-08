function Mostrar()
{
//tomo la edad  

	var años
	var estadocivil
	var sol
	var div
	var cas

	años=document.getElementById("edad").value;
	estadocivil=document.getElementById("estadoCivil").value;
	sol=document.getElementById("Soltero").value;
	div=document.getElementById("Divorciado").value;
	cas=document.getElementById("Casado").value;
	
	if(años<18&&estadocivil==cas||div){

	alert("Es muy joven para no ser soltero");
	}


}//FIN DE LA FUNCIÓN