//Creo una variable con los datos de mi API local//

const url= "./data.json";


// Funcion para crear Cards Dinamicas//
const contenedor= document.querySelector (".contenedor-bebidas")


function crearHtml (productos){
  
    productos.forEach(producto => {
  
    const card= document.createElement ("div") ;
    card.innerHTML= 
    ` <div class="card" style="width: 21rem;">
                 <img src="./images/${producto.img}" class="card-img-top" alt="...">
                 <div class="card-body">
                 <h5 class="card-title"><b>${producto.nombre}</b></h5>
                 <p class="card-text"><font color="red"><b>$ ${producto.precio}</b></font></p>
                 <button id= "${producto.id}" class="btn btn-dark"><b>Comprar</b></button>
               </div>` ;
    
   contenedor.appendChild (card)
  })

  const botonesComprar = document.querySelectorAll(".btn btn-dark"); 
     
  botonesComprar.forEach (btn => {
    btn.addEventListener ("click", (e)=> agregarAlCarrito (e,productos))
  })
}

   function agregarAlCarrito (e,productos){
   console.log (productos)
   console.log (e.target.id)

   const prodElegido= productos.find (el =>el.id ===parseInt (e.target.id))
   console.log (prodElegido)
   
   }
  


   


//Utilizo Fetch para renderizar mis cards desde mi API//

fetch(url)
.then(res=> res.json())
.then (data => {
  productos = data
  crearHtml (productos)});
  
    