const url= "./data.json";

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
  
/////////EVENTO CALCULAR TOTAL///////////

const total = document.getElementById ("total")
const cantidad = document.getElementById("caja-cantidad")
 
  
cantidad.addEventListener ("change", ()=>{
const inputcantidad = document.getElementById("caja-cantidad").value


if (inputcantidad >=1){  
 
total.value= inputcantidad * precio.value;
}
}); 
 
///Boton AGREGAR////
 const btnAgregar = document.getElementById ("btn-pedido");

 function dibujarPedido() {
    const divproductoElegido= document.createElement ("div");

     divproductoElegido.innerHTML=  `<table class="table">
                                     <thead>
                                     <tr>
                         <th scope="col">#</th>
                         <th scope="col">Producto/th>
                         <th scope="col">Cantidad</th>
                         <th scope="col">Precio</th>
                         <th scope="col">Subtotal</th>
                                     </tr>
                                     </thead>
                        <tbody>
                        let tablaBody = "";
                        let total = 0;
                        let iconoEliminar = <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
  </svg> `;
     
 


 btnAgregar.addEventListener ("click", (producto)=>{
    let carrito= []
    productos.forEach (producto=>{
    dibujarPedido (producto)
    });
 })};
 
fetch(url)
.then(res=> res.json())
.then (data => crearHtml (data))