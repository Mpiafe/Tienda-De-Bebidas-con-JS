//Creo una variable con los datos de mi API local//

const url = "./data.json";

//Funcion para crear html.

const contenedor = document.querySelector(".contenedor-bebidas");

function crearHtml(productos) {
  productos.forEach((producto) => {
    const divProducto = document.createElement("div");
    divProducto.innerHTML = ` 
            <div class="card" style="width: 21rem;">
              <img src="./images/${producto.img}" class="card-img-top" alt="...">
              <div class="card-body">
              <h5 class="card-title"><b>${producto.nombre}</b></h5>
              <p class="card-text"><font color="red"><b>$ ${producto.precio}</b></font></p>
              <button id= "${producto.id}" class="btn btn-dark"><b>Comprar</b></button>
            </div>`;
    contenedor.appendChild(divProducto);
    ////////////////EVENTOS//////////////////////

    const btnComprar = document.getElementById(`${producto.id}`);

    btnComprar.addEventListener("click", (e) => {
      enviarAForm(producto);
    });
  });
}

const carrito = [];

function enviarAForm(producto) {
  console.log(producto);

  const precio = document.getElementById("precio");
  const total = document.getElementById("total");
  const cantidad = document.getElementById("caja-cantidad");
  
  const bebidas = document.getElementById("selectBebidas");
  let option = `<option value= "${producto.id}">${producto.nombre}</option>`;
  bebidas.innerHTML = option;
  precio.value = producto.precio;

  cantidad.addEventListener("change", () => {
    const inputcantidad = document.getElementById("caja-cantidad").value;
  
    if (inputcantidad >= 1) {
      total.value = inputcantidad * precio.value;
    }
  });

  ///Boton AGREGAR////

  const btnAgregar = document.getElementById("botonAgregar");
  
  btnAgregar.addEventListener("click", () => {
    carrito.push({...producto, cantidad: parseInt(cantidad.value), precioTotal: parseInt(total.value)})
    console.log(carrito)
    pintarHtmlPedido(carrito)
    });

}
//Funcion para eliminar producto del carrito//
function mostrarCarrito (){
  const contenedorPedido = document.querySelector(".contenedorPedido");
  contenedorPedido.innerHTML = "";
}

const eliminarItem = (id) => {
    let borrar = carrito.find((producto) =>  producto.id === id)
    let indice = carrito.indexOf(borrar)
    carrito.splice(indice, 1)
    mostrarCarrito ()

  
};


///Funcion para pintar tabla////
function pintarHtmlPedido(carrito) {
  const contenedorPedido = document.querySelector(".contenedorPedido");

  let iconoEliminar = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
   </svg>`

  carrito.forEach((producto) => {
    const pedidoProducto = document.createElement("div");
    pedidoProducto.innerHTML = `
    <table class="table table-dark table-striped">

    <thead class="items">
    <tr>
      
      <th scope="col">Producto</th>
      <th scope="col">Precio</th>
      <th scope="col">Cantidad</th>
      <th scope="col">Total</th>
      <th scope="col">Eliminar</th>
    </tr>
  </thead>
    <tbody class="bodyprod">
   <tr>
        
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td> 
        <td>${producto.cantidad}</td>
        <td>${total.value}</td>
        <td><span class="icono-eliminar" onclick="eliminarItem(${producto.id})">${iconoEliminar}</span></td>
      
        
      </tr>   
    </tbody>

    </table>`
    


    contenedorPedido.appendChild(pedidoProducto);
    
  });

  ///Boton  confirmar pedido///
  const btnPedido= document.getElementById('botonPedido');

  btnPedido.addEventListener("click", ()=>{
    const { value: formValues } =  Swal.fire({
      title: 'Complete el formulario realizar envio',
      html:
        '<input id="swal-input1" class="swal2-input" placeholder= "Nombre y Apellido">' +
        '<input id="swal-input2" class="swal2-input" placeholder= "Domicilio">' +
        '<input id="swal-input3" class="swal2-input" placeholder= "Correo electronico">',
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
          
        ]
      }
    })
    
    if (formValues) {
      Swal.fire(JSON.stringify(formValues))
    }
   

  })

 
}


//Utilizo Fetch para renderizar mis cards desde mi API//

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    productos = data;
    crearHtml(productos);
  }
  );
