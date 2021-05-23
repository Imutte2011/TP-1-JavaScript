function punto6(){
let cierto;
do{
	cierto = true;
	let num = prompt("Ingrese un numero: ");
	if (parseInt(num) == num){
	num = parseInt(num);

		for(let n = num; n >= 1; n--){
			for(let esc = n; esc >=1 ; esc--){
				document.write(n);
			}
			document.write("<br>");
		}
		
	}else{
		cierto = false;
		alert("Por favor. Ingrese un numero.");
	}
}while(cierto == false);

document.write("<br><br> Espere 5 segundos.");

setTimeout( function() { window.location.href = "index.html"; }, 5000 );

}