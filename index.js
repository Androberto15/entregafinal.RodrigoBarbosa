//NAVBAR
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarMenu = document.getElementById('navbar-menu');
  
    navbarToggle.addEventListener('click', function() {
      if (navbarMenu.style.display === 'none' || navbarMenu.style.display === '') {
        navbarMenu.style.display = 'flex';
      } else {
        navbarMenu.style.display = 'none';
      }
    });
  });
  


//Jumbotron
//JUMBOTROn



const jumbotronDiv = document.getElementById("jumbotron");
  
function createJumbotron(title, description) {
  const jumbotronContent = `
    <div class="jumbotron-inner">
      <h1>${title}</h1>
      <p>${description}</p>
    </div>
  `;
  jumbotronDiv.innerHTML = jumbotronContent;
}

// Llamada a la función para crear el jumbotron con los datos deseados
const jumbotronTitle = "Bienvenido";
const jumbotronDescription = "Jumbotron";
const jumbotronImage = "https://placehold.co/900x900";
jumbotron.classList.add("jumbotron");
createJumbotron(jumbotronTitle, jumbotronDescription, jumbotronImage, jumbotronDiv);



//NAVBAR
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarMenu = document.getElementById('navbar-menu');
  
    navbarToggle.addEventListener('click', function() {
      if (navbarMenu.style.display === 'none' || navbarMenu.style.display === '') {
        navbarMenu.style.display = 'block';
      } else {
        navbarMenu.style.display = 'none';
      }
    });
  });
  






 // imagen: "https://placehold.co/200x200"

//PRODUCTOS
document.addEventListener('DOMContentLoaded', function() {
  const contenedorProductos = document.getElementById('productos');
  
  // Array de nombres de las imágenes en la carpeta "imgs"
  const imagenes = [
      "imgs/1.jpg",
      "imgs/2.jpg",
      "imgs/3.jpg",
      "imgs/4.jpg",
      "imgs/5.jpg",
      "imgs/6.jpg",
      "imgs/7.jpg",
      "imgs/8.jpg",
      "imgs/9.jpg",
      "imgs/10.jpg"
  ];

  // Precios de los productos
  const precios = [1000, 1500, 750, 900, 350, 875, 1200, 1800, 950, 600];

  // Títulos de los productos
  const titulos = [
      "Espresso",
      "Americano",
      "Cappuccino",
      "Latte",
      "Mocha",
      "Macchiato",
      "Affogato",
      "Flat White",
      "Cortado",
      "Frappé"
  ];

  // Realiza una solicitud HTTP a la API para obtener los productos
  fetch('https://fake-coffee-api.vercel.app/api')
      .then(response => response.json())
      .then(data => {
          // Procesa los datos recibidos y muestra los primeros 10 productos en la página
          for (let i = 0; i < 10; i++) {
              const producto = data[i];
              const divProducto = document.createElement('div');
              divProducto.classList.add('producto');

              const imagen = document.createElement('img');
              imagen.src = imagenes[i]; // Asigna la imagen correspondiente según el índice
              imagen.alt = titulos[i];

              const nombrePrecio = document.createElement('p');
              nombrePrecio.textContent = `${titulos[i]} - $${precios[i]}`;

              const botonAdd = document.createElement('button');
              botonAdd.classList.add('btn-add');
              botonAdd.setAttribute('id', 'producto_' + producto.id); // ID 
              botonAdd.setAttribute('data-producto', titulos[i]);
              botonAdd.setAttribute('data-precio', precios[i]);
              botonAdd.innerHTML = '<i class="fas fa-cart-plus"></i> Añadir al carro';
              botonAdd.addEventListener('click', addToCart);

              botonAdd.addEventListener('click', function() {
                  Toastify({
                      text: 'Producto añadido al carro: ' + titulos[i],
                      duration: 1000,
                      gravity: 'top',
                      backgroundColor: 'linear-gradient(to right, #00b09b, #96c93d)',
                      stopOnFocus: true,
                  }).showToast();
              });

              divProducto.appendChild(imagen);
              divProducto.appendChild(nombrePrecio);
              divProducto.appendChild(botonAdd);

              contenedorProductos.appendChild(divProducto);
          }
      })
      .catch(error => {
          console.error('Se produjo un error al obtener los productos:', error);
      });
});

// Función addToCart simulada para evitar errores
function addToCart() {
  console.log('Producto añadido al carro');
}




    

    function addToCart(event) {
        const producto = event.target.getAttribute('data-producto');
        const precio = parseFloat(event.target.getAttribute('data-precio'));

        // Obtener productos del localStorage
        let productosEnCarrito = JSON.parse(localStorage.getItem('productosEnCarrito')) || [];

        // Verificar si el producto ya está en el carrito
        let productoExistente = productosEnCarrito.find(item => item.producto === producto);

        if (productoExistente) {
            productoExistente.cantidad += 1;
        } else {
            productosEnCarrito.push({ producto: producto, precio: precio, cantidad: 1 });
        }

        // Guardar productos en el localStorage
        localStorage.setItem('productosEnCarrito', JSON.stringify(productosEnCarrito));

        actualizarCarrito();
    }

    function actualizarCarrito() {
        const listaCarrito = document.getElementById('lista-carrito');
        listaCarrito.innerHTML = '';

        let totalCompra = 0;

        let productosEnCarrito = JSON.parse(localStorage.getItem('productosEnCarrito')) || [];

        productosEnCarrito.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.producto} - Cantidad: ${item.cantidad} - Precio total: $${item.precio * item.cantidad}`;

            const botonEliminar = document.createElement('button');

            botonEliminar.innerHTML = '<i class="fas fa-trash-alt"></i> Eliminar';
            botonEliminar.addEventListener('click', () => eliminarProducto(item.producto));
            li.appendChild(botonEliminar);

            listaCarrito.appendChild(li);

            totalCompra += item.precio * item.cantidad;



            const toastify = document.getElementById
        });





        //  párrafo del total de la compra
let totalParrafo = document.getElementById('total-compra');

// Si el párrafo no existe, lo crea
if (!totalParrafo) {
    totalParrafo = document.createElement('p');
    totalParrafo.id = 'total-compra';
    document.getElementById('carrito').appendChild(totalParrafo);

    // Agregar botón "Finalizar compra" solo si no existe
    const botonFinalizarCompra = document.createElement('button');
    botonFinalizarCompra.textContent = 'Finalizar compra';
    botonFinalizarCompra.id = 'btn-finalizar-compra'; //  ID 
    botonFinalizarCompra.addEventListener('click', finalizarCompra);
    document.getElementById('carrito').appendChild(botonFinalizarCompra);
}

// Actualizar el contenido del párrafo con el nuevo total de compra
totalParrafo.textContent = `Total: $${totalCompra}`;

// Función para finalizar la compra
function finalizarCompra() {
  Swal.fire({
    icon: "success",
    iconColor: "green",
    title: "Felicitaciones",
    text: "Tu compra está en camino",
    footer: '<img src="https://placehold.co/100x100" alt="">'
  });
}

    }










    function eliminarProducto(nombreProducto) {
        let productosEnCarrito = JSON.parse(localStorage.getItem('productosEnCarrito')) || [];

        // Filtrar los productos para mantener solo aquellos que no coincidan con el nombre del producto a eliminar
        productosEnCarrito = productosEnCarrito.filter(item => item.producto !== nombreProducto);

        // Actualizar el localStorage con la nueva lista de productos
        localStorage.setItem('productosEnCarrito', JSON.stringify(productosEnCarrito));

        // Actualizar el carrito en la interfaz de usuario
        actualizarCarrito();
    }

    actualizarCarrito();





    







