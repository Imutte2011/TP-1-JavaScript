function punto3(){
let s = 0;
let n;
do {
    n = prompt("Ingresar un numero: ");
    if (parseInt(n) == n) {
        n = parseInt(n);
        s += n;
    }
    else {
        if (n != undefined) {
            alert(n + " no es un numero."); 
        }
    }
} while (confirm ("¿Desea seguir ingresando numeros?"));
document.write(s);

document.write("<br><br> Espere 5 segundos.");

setTimeout( function() { window.location.href = "index.html"; }, 5000 );

}