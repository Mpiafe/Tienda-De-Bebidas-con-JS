// Mi array con mi lista de productos.
const productos =[
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
  img: "Malibu.jpg",
  },
  {
  id: 3,
  nombre: "Bailey's Original Cream 375 cc", 
  precio: 3800,
  img: "Bailey.jpg", 
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

const contenedor= document.getElementById ("contenedor-bebidas")

function crearHtml (array){
  let html;
  
  for (const producto of array) {
  
   html=
  
  ` <div class="card" style="width: 18rem;">
               <img src="./images/${producto.img}" class="card-img-top" alt="...">
               <div class="card-body">
               <h5 class="card-title"><b>${producto.nombre}</b></h5>
               <p class="card-text"><font color="red"><b>$ ${producto.precio}</b></font></p>
               <a href="#" class="btn btn-dark"><b>Comprar</b></a>
             </div>` ;
  
 contenedor.innerHTML += html;

}
};

crearHtml (productos);










