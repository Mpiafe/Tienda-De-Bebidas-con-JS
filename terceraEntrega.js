// Mi array con mi lista de productos.
const productos = [
  {
   id: 1,
   nombre: "Gin Bombay Sapphire 750 cc", 
   precio: 5000,
   img: "GinBombay.jpg",

  },
  {
  id: 2,
  nombre: "Ron Malibu 750cc", 
  precio: 9300,
  img: "Malibu.png",
  },
  {
  id: 3,
  nombre: "Bailey's Original Cream 375 cc", 
  precio: 3800,
  img: "Baileys.jpg", 
  },
  {
  id: 4,
  nombre: "Aperol 750cc", 
  precio: 1300,
  img: "Aperol.jpg",  
  },
  {
  id: 5,
  nombre: "Fernet Branca 750cc", 
  precio: 1700,
  img: "Fernet.jpg", 
  },
  {
  id: 6,
  nombre: "Whisky Jonnie Walker 700cc", 
  precio: 16000,
  img: "Whisky.jpg",    
  },
  {
  id: 7,
  nombre: "Vodka Smirnoff 700 cc", 
  precio: 1300,
  img: "Smirnoff.jpg",   
  },
  {
  id: 8,
  nombre: "Vodka Absolut Original 1400cc", 
  precio: 4000,
  img: "Absolut.jpg", 
  },
  
 
];

/////////////////////////FUNCIONES///////////////////////////////////////////////
//Funcion para crear html.

const contenedor= document.querySelector (".contenedor-bebidas")


function crearHtml (productos){
  
  productos.forEach(producto => {

  const divProducto= document.createElement ("div") ;
  divProducto.innerHTML= 
  ` <div class="card" style="width: 21rem;">
               <img src="./images/${producto.img}" class="card-img-top" alt="...">
               <div class="card-body">
               <h5 class="card-title"><b>${producto.nombre}</b></h5>
               <p class="card-text"><font color="red"><b>$ ${producto.precio}</b></font></p>
               <button id= "${producto.id}" class="btn btn-dark"><b>Comprar</b></button>
             </div>` ;
  
 contenedor.appendChild (divProducto)

////////////////EVENTOS//////////////////////

const btnComprar = document.getElementById(`${producto.id}`);

btnComprar.addEventListener('click', () => {
const bebidas = document.getElementById("selectBebidas");
let option = `<option value= "${producto.id}">${producto.nombre}</option>`;
bebidas.innerHTML = option;

const precio = document.getElementById("precio");
precio.value= producto.precio


});
})};

crearHtml(productos);


/////////EVENTO CALCULAR TOTAL///////////
///Declaro funcion///
/*function calculartotal (cantidad, precio){
  if (cantidad >=1){
      cantidad = cantidad ;
  let resultado = cantidad * precio;
  return resultado;*/
const total = document.getElementById ("total")
const cantidad = document.getElementById("caja-cantidad")
 
  
cantidad.addEventListener ("change", ()=>{
const inputcantidad = document.getElementById("caja-cantidad").value


if (inputcantidad >=1){  
 
total.value= inputcantidad * precio.value;
}
}); 
 
///Boton REALIZAR PEDIDO////
const btnPedido= document.getElementById('btn-pedido');

btnPedido.addEventListener("click", ()=>{
  Swal.fire(
    'Felicitaciones!',
    'Tu pedido se realizo con exito!',
    'success'
  )
});

//////carrito de compras////
//Fetch///


