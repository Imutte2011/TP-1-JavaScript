function punto7(){
for(let recor = 1; recor <= 500; recor++){
	document.write(recor);
	if(recor % 4 == 0){
		document.write(" (multiplo de 4)")
	}else if(recor % 9 == 0){
		document.write(" (multiplo de 9)")
}
	if(recor % 5 == 0){
	document.write("<hr>");
}
	document.write("<br>");
}


document.write("<br><br> Espere 5 segundos.");

setTimeout( function() { window.location.href = "index.html"; }, 5000 );

}