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

  const btnAgregar = document.getElementById("botonAgregar");
  
  btnAgregar.addEventListener("click", () => {
  carrito.push({...producto, cantidad: parseInt(cantidad.value), precioTotal: parseInt(total.value)})
  console.log(carrito)
  pintarHtmlPedido(carrito)
  });
}

/////////EVENTO CALCULAR TOTAL///////////


///Boton AGREGAR////


function pintarHtmlPedido(carrito) {
  const contenedorPedido = document.querySelector(".contenedorPedido");

  carrito.forEach((producto) => {
    const pedidoProducto = document.createElement("div");
    pedidoProducto.innerHTML = `<table class="table">
    <thead class="items">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Producto</th>
        <th scope="col">Precio</th>
        <th scope="col">Cantidad</th>
        <th scope="col">Total</th>
      </tr>
    </thead>
    <tbody class="bodyprod">
      <tr>
        <th scope="row">1</th>
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td> 
        <td>${producto.cantidad}</td>
        <td>${total.value}</td>
      </tr>   
    </tbody>
  </table>
  <div class="btnPedido">
  <button id="botonPedido" type="button" class="btn btn-danger"><b>Confirmar Pedido</b></button>
  </div>`
  
  ;

    contenedorPedido.appendChild(pedidoProducto);

  });

  const btnPedido= document.getElementById('botonPedido');

  btnPedido.addEventListener("click", ()=>{
    Swal.fire(
      'Felicitaciones!',
      'Tu pedido se realizo con exito!',
      'success'
    )
  })


}


//Utilizo Fetch para renderizar mis cards desde mi API//

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    productos = data;
    crearHtml(productos);
  });
