function punto2(){
let vacio= "";
let texto;
do {
    texto = prompt ("Ingrese una cadena de texto: ");  
        		vacio += "-" + texto;
}while (confirm ("Desea seguir?"));
  document.write (vacio);

document.write("<br><br> Espere 5 segundos.");

setTimeout( function() { window.location.href = "index.html"; }, 5000 );

}