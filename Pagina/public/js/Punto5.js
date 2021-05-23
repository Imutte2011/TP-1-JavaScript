function punto5(){
for(let n = 1; n <= 30; n++){
	for(let esc = 1; esc <= n; esc++){
		document.write(n);
	}
document.write("<br>");
}

document.write("<br><br> Espere 5 segundos.");

setTimeout( function() { window.location.href = "index.html"; }, 5000 );

}