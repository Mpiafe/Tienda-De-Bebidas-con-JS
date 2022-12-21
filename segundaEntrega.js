// listado de productos
const productos= [
                   {id: "1",nombre: "Fernet" , precio: 1000},
                   {id: "2",nombre: "Vodka"  , precio: 2000},
                   {id: "3",nombre: "Aperol" , precio: 1800},
                   {id: "4",nombre: "Whisky" , precio: 3000},
                   {id: "5",nombre: "Cerveza", precio: 500 },
                 ];

let carrito =[];

function calcularPedido (array){
    for (let i= 0; i < array.length; i++){
    const total= carrito.reduce((acc,el)=> acc + el.precio * el.cantidad,0)
    return (alert ("El total a pagar es:"+ "$"+ " " + total))
    }
                };
                


let saludo = prompt("Bienvenidos a LA 33 TIENDA DE BEBIDAS.\nElija la opcion deseada: \n1- Ver Catalogo. \n2- Salir.");
    

while (saludo === "1"){
    alert ("Catalogo de Productos");
    let listaProductos = productos.map ((producto)=> "*" + producto.nombre + ":" + " " + "$" + producto.precio);
    alert (listaProductos.join ("\n"));

let bebidas = prompt (" Que bebidas desea agregar a su carrito??")
let precio= 0;

    switch (bebidas){
            case "Fernet":
            alert ("Valor del producto seleccionado $ 1000");
            precio = 1000;
            break;
    
            case "Vodka":
            alert ("Valor del producto seleccionado $ 2000");
            precio= 2000;
            break;
    
            case "Aperol":
            alert ("Valor del producto seleccionado $ 1800");
            precio= 1800;
            break;

            case "Whisky":
            alert ("Valor del producto seleccionado $ 3000");
            precio= 3000;
            break;

            case "Cerveza":
            alert ("Valor del producto seleccionado $ 500");
            precio= 500;
            break;
            
            default:
            alert ("opcion no valida");
            break;
       
    }

    let cantidad = parseInt (prompt ("Ingrese la cantidad que desea comprar"));
    carrito.push ({bebidas,cantidad, precio});
   
   //condicion de salida del while.

   saludo = prompt ("Desea seguir agregando producto al carrito: \n1-Continuar. \nX-Finalizar compra.")
}
   if(saludo === "X" || saludo === "x"){
    alert ("Muchas Gracias por su compra, a continuacion le detallamos el total a pagar");
   

    calcularPedido(carrito);
   }


  saludo= alert ("Lo esperamos nuevamente");
   

while (saludo === "2"){
     alert ("Gracias por visitar nuestro sitio web.")
     break;
    };  


     
   



