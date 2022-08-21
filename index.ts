//Carrito de compras
//declaramos variables y arreglos.
let producto = document.getElementById("producto");
let precio = document.getElementById("precio");
let agregar = document.getElementById("btn-agregar");
let aplicarDescuento = document.getElementById("descuento");
let detalle = document.getElementById("detalle");
let total = document.getElementById("total");
let vaciarInputs = document.getElementById("vaciar");
let mensajeDescuento = document.getElementById("mensaje");
let productos: string[] = [];
let precios: number[] = [];
let sumaCompra: number = 0;
let descuento: number = 0;

//push para cargar elementos a un arreglo
const agregarAlCarrito = () => {
  productos.push(producto.value);
  precios.push(Number(precio.value));

  detalle?.innerHTML += `<li>${producto.value} : $${precio.value}</li>`;
  //vaciar las entradas de valores
  producto.value = "";
  precio.value = "";
  total?.innerHTML = "";
  sumaCompra = 0;
  for (let i: number = 0; i < precios.length; i++) {
    sumaCompra += Number(precios[i]);
  }
  total?.innerHTML = sumaCompra;
};

//creo funcion para vaciar el carrito de compras
const vaciarDetalleCompra = () => {
  detalle?.innerHTML = "";
  total?.innerHTML = "";
  mensajeDescuento?.innerHTML = "";
};
const condicionDescuento = () => {
  descuento = 0;
  if (sumaCompra > 2500) {
    descuento = sumaCompra * 0.9;
    mensajeDescuento?.innerHTML =
      "¡Gracias por su compra!, tiene un descuento del 10%,EL TOTAL DE SU COMPRA ES:$" +
      descuento;
  } else {
    descuento = sumaCompra;
    mensajeDescuento?.innerHTML = "¡Gracias por su compra!,“Con su compra de $2500 puede acceder a un descuento.";
  }
};

//le indico a los botnones que disparen los eventos al hacer click.
agregar?.addEventListener("click", agregarAlCarrito);
vaciarInputs?.addEventListener("click", vaciarDetalleCompra);
aplicarDescuento?.addEventListener("click", condicionDescuento);
