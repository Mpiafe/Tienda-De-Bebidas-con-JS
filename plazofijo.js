/*let inversiones = parseInt (prompt ("Ingrese la operacion que desea realizar: \n1-Plazo Fijo. \n2-Compra de Dolares. \nPresione X para finalizar"));



while (inversiones !="x" && inversiones !="X"){

    switch (inversiones){

    case "1":
        alert ("Ingrese el monto que desea invertir")
        let opcion= parseInt(promp("Ingrese la cantidad de dias: \n1- Plazo Fijo a 30 dias. \n2-Plazo Fijo a 60 dias. \n3- Plazo Fijo a 90 dias"))
        /*if (opcion === 1){
            alert ("La Tasa de interes es del 75% anual")

        break;
        
    case "2":
        alert ("Ingrese el monto que desea invertir") 
        let opcion1=  parseInt(promp("Ingrese el monto en pesos que quiere convertir a Dolares Americanos")); 
        function conversor (num){
            if (opcion1 === num){
                var dolar= num % 3.10
                return dolar;  
            }
        };
        break;
        default: 
        alert ("opcion no valida");
        break;
    }
let inversiones = prompt ("Ingrese la operacion que desea realizar: \n1-Plazo Fijo. n\2-compra de dolares \nPresione X para finalizar");

}*/
let saldo = 35000;

  let opcion = prompt(
    "Elegí una opción: \n1- Saldo. \n2 - Retiro de dinero. \n3 - Depósito. \nPresioná X para finalizar."
  );

  while (opcion != "X" && opcion != "x") {
    switch (opcion) {
      case "1":
        alert("Tu saldo es $" + saldo);
        break;
      case "2":
        let retiro = parseInt(prompt("Ingresa cantidad a retirar"));

        if (retiro <= saldo) {
          saldo = saldo - retiro;
          alert("Retiraste $" + retiro + " Tu nuevo saldo es $" + saldo);
        } else {
          alert("Anda a laburar");
        }
        break;
      case "3":
        let deposito = parseInt(prompt("Ingresa cantidad a depositar"));

        saldo = saldo + deposito;
        alert("Tu nuevo saldo es $" + saldo);

        break;

      default:
        alert("opcion no valida");
        break;
    }

    //condicion de salida del while
    opcion = prompt(
      "Elegí una opción: \n1- Saldo. \n2 - Retiro de dinero. \n3 - Depósito. \n Presioná X para finalizar."
    );
  }
  