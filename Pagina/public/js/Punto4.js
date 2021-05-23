function punto4(){
let op;
let letra = "";
let n;
do {
    n = prompt("Ingresa tu DNI");
    if (parseInt(n) == n) {
        n = parseInt(n);
        if (n >= 0 && n <= 99999999) {
            op = n % 23;
          
            switch (op) {
                case 0:
                    letra = "T";
                    break;
                case 1:
                    letra = "R";
                    break;
                case 2:
                    letra = "W";
                    break;
                case 3:
                    letra = "A";
                    break;
                case 4:
                    letra = "G";
                    break;
                case 5:
                    letra = "M";
                    break;
                case 6:
                    letra = "Y";
                    break;
                case 7:
                    letra = "F";
                    break;
                case 8:
                    letra = "P";
                    break;
                case 9:
                    letra = "D";
                    break;
                case 10:
                    letra = "X";
                    break;
                case 11:
                    letra = "B";
                    break;
                case 12:
                    letra = "N";
                    break;
                case 13:
                    letra = "J";
                    break;
                case 14:
                    letra = "Z";
                    break;
                case 15:
                    letra = "S";
                    break;
                case 16:
                    letra = "Q";
                    break;
                case 17:
                    letra = "V";
                    break;
                case 18:
                    letra = "H";
                    break;
                case 19:
                    letra = "L";
                    break;
                case 20:
                    letra = "C";
                    break;
                case 21:
                    letra = "K";
                    break;
                case 22:
                    letra = "E";
                    break;
                default:
                    alert("ingresar un numero entre el 0 al 22");
            }
        }
        alert("Numero: " + n + ", Letra: " + letra);
    }
    else {
        if (n != undefined) {
            alert(n + " ingresar un numero de 8 dig por favor");
        }
    }
} while (confirm ("¿Desea seguir?"));

document.write("<br><br> Espere 5 segundos.");

setTimeout( function() { window.location.href = "index.html"; }, 5000 );

}
