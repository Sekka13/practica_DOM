const products = [
  {
    name: "HP Essentials 255 G8 AMD",
    price: 289,
    stars: 4,
    reviews: 250,
    seller: "PcComponentes",
    image: "/assets/ejemplo.png",
    title: "Imagen del Dell XPS 13, un portátil compacto de color plateado con un diseño elegante y moderno, con pantalla ultradelgada"
  },
  {
    name: "Apple MacBook Pro 13",
    price: 1299.99,
    stars: 3,
    reviews: 650,
    seller: "MacStore",
    image: "/assets/apple.png", 
    title: "Imagen de un MacBook Pro 13 de Apple, un portátil de color plata con un diseño minimalista y una pantalla brillante"
  },
  {
    name: "HP Spectre x360",
    price: 1099.99,
    stars: 4,
    reviews: 450,
    seller: "GadgetWorld",
    image: "/assets/descarga.png", 
    title: "Imagen del HP Spectre x360, un portátil convertible 2 en 1 con pantalla táctil, color negro con detalles metálicos"
  },
  {
    name: "Asus ZenBook 14",
    price: 799.99,
    stars: 2,
    reviews: 550,
    seller: "LaptopZone",
    image: "/assets/descarga (1).png",
    title: "Imagen del Asus ZenBook 14, un portátil ultradelgado con un diseño elegante de color azul y pantalla de bisel delgado"
  },
  {
    name: "Lenovo ThinkPad X1 Carbon",
    price: 1349.99,
    stars: 5,
    reviews: 890,
    seller: "LenovoStore",
    image: "/assets/descarga (2).png", 
    title: "Imagen del Lenovo ThinkPad X1 Carbon, un portátil de alto rendimiento color negro con teclado retroiluminado y pantalla de alta resolución"
  },
  {
    name: "Microsoft Surface Laptop 4",
    price: 999.0,
    stars: 3,
    reviews: 720,
    seller: "MicrosoftStore",
    image: "/assets/descarga (3).png", 
    title: "Imagen del Microsoft Surface Laptop 4, un portátil de diseño elegante en color platino, con pantalla táctil de alta calidad"
  },
  {
    name: "Acer Swift 3",
    price: 699.99,
    stars: 4,
    reviews: 430,
    seller: "AcerShop",
    image: "/assets/descarga (4).png", 
    title: "Imagen del Acer Swift 3, un portátil ligero y compacto de color gris oscuro con una pantalla nítida y teclado cómodo"
  },
  {
    name: "Razer Blade 15",
    price: 1799.99,
    stars: 5,
    reviews: 950,
    seller: "RazerStore",
    image: "/assets/descarga (5).png",
    title: "Imagen del Razer Blade 15, un portátil de gaming con diseño agresivo, color negro mate y teclado RGB iluminado"
  },
  {
    name: "Samsung Galaxy Book Pro 360",
    price: 1199.99,
    stars: 4,
    reviews: 610,
    seller: "SamsungStore",
    image: "/assets/descarga (6).png",     
    title: "Imagen del Samsung Galaxy Book Pro 360, un portátil 2 en 1 con pantalla táctil que gira 360 grados, de color azul metalizado"
  },
  {
    name: "Huawei MateBook X Pro",
    price: 1299.0,
    stars: 2,
    reviews: 480,
    seller: "HuaweiStore",
    image: "/assets/descarga (7).png",  
    title: "Imagen del Huawei MateBook X Pro, un portátil de diseño premium en color gris claro con pantalla ultra alta resolución"
  
  },
];

const categorias = [
  "Marca",
  "Sistema Operativo",
  "Procesador",
  "Memoria Ram",
  "Tarjeta Gráfica",
  "Almacenamiento SSD",
  "Pulgadas",
];

//   ------SECCION DE CATEGORIAS-----

const seccionCategorias = document.querySelector("#categorias");
const listaCategorias = document.createElement("ul");
seccionCategorias.appendChild(listaCategorias);
for (const categoria of categorias) {
  li = document.createElement("li");
  li.innerText = categoria;
  icono = document.createElement("img");
  icono.src = "/assets/downArrow_icon.png";
  li.appendChild(icono);
  listaCategorias.appendChild(li);
}

//   --------SECCION DE TIENDA---------

const seccionTienda = document.querySelector("#tienda");

for (const producto of products) {
  articulo = document.createElement("article");

  img = document.createElement("img");
  img.src = producto.image;
  img.title =producto.title;
  articulo.appendChild(img);

  precio = document.createElement("p");
  precio.className = "precio";
  precio.innerText = producto.price + " €";
  articulo.appendChild(precio);

  div = document.createElement("div");

  for (let i = 0; i < producto.stars; i++) {
    estrella = document.createElement("img");
    estrella.src = "/assets/star.png";
    div.appendChild(estrella);
  }

  reviews = document.createElement("p");
  reviews.innerText = `(${producto.reviews})`;
  div.appendChild(reviews);

  articulo.appendChild(div);

  vendidoPor = document.createElement("p");
  vendidoPor.className = "vendedor";
  vendidoPor.innerText = "Vendido por ";

  vendedor = document.createElement("span");
  vendedor.innerText = producto.seller;
  vendidoPor.appendChild(vendedor);

  articulo.appendChild(vendidoPor);

  seccionTienda.appendChild(articulo);
}
