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
  

  

fetch("./productos.json")
.then(res=> res.json())
.then (datos => {
console.log (datos)
});
