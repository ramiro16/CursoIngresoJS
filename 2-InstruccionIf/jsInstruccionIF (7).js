function Mostrar()
{
//tomo la edad  

	var años
	var estadocivil


	años=document.getElementById("edad").value;
	estadocivil=document.getElementById("estadoCivil").value;
	
	if(años<18&&estadocivil!="soltero"){

	alert("Es muy joven para no ser soltero");
	}


}//FIN DE LA FUNCIÓN