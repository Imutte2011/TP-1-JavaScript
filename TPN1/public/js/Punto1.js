function punto1(){
	let edad = prompt ("Ingrese un numero del 1 al 10");

            if (edad > 0 && edad <= 3) {
            document.write ("Muy deficiente");
            }
            else if (edad > 3 && edad <= 5) {
            document.write ("Insuficiente");
            }
            else if (edad > 5 && edad <= 6) {
            document.write ("Suficiente");
            }
            else if (edad > 6 && edad <= 7) {
            document.write ("Bien");
            }
            else if (edad > 7 && edad <= 9) {
            document.write ("Notable");
            }
            else if (edad > 9 && edad <= 10) {
            document.write ("Sobresaliente");
            }            else if (edad > 10 || edad <= 0) {
            document.write ("Por favor ingrese un numero del 0 al 10");
            }

document.write("<br><br> Espere 5 segundos.");

setTimeout( function() { window.location.href = "index.html"; }, 5000 );
}