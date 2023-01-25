//Creo una variable con los datos de mi API local//

const url= "./data.json";



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

btnComprar.addEventListener('click', (e) => {
  enviarAForm(producto)
})
  })
}
function enviarAForm (producto){

  console.log (producto)
const bebidas = document.getElementById("selectBebidas");
let option = `<option value= "${producto.id}">${producto.nombre}</option>`;
bebidas.innerHTML = option;
precio.value= producto.precio
}





/////////EVENTO CALCULAR TOTAL///////////
const precio = document.getElementById("precio");
const total = document.getElementById ("total")
const cantidad = document.getElementById("caja-cantidad")
 
  
cantidad.addEventListener ("change", ()=>{
const inputcantidad = document.getElementById("caja-cantidad").value


if (inputcantidad >=1){  
 
total.value= inputcantidad * precio.value;
}
}); 
 
///Boton AGREGAR////
let carrito= []
const btnAgregar= document.getElementById('btn-agregar');

btnAgregar.addEventListener("click", ()=>{
  console.log(precio.value);
  console.log(cantidad.value);
  console.log(total.value);
  console.log (productos);


})
 function pintarHtmlPedido (){ 
const contenedorPedido = document.querySelector (".contenedorPedido")
  let carrito=[];
  productos.forEach (producto=> {
    const pedidoProducto = document.createElement ("div")
    pedidoProducto.innerHTML= ` <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Producto</th>
        <th scope="col">Precio</th>
        <th scope="col">Cantidad</th>
      </tr>
    </thead>
    <tbody>`

contenedorPedido.appendChild (pedidoProducto)

  })
};

function agregarCarrito (){
  
}

//Utilizo Fetch para renderizar mis cards desde mi API//

fetch(url)
.then(res=> res.json())
.then (data => {
  productos = data
  crearHtml (productos)});
  
    