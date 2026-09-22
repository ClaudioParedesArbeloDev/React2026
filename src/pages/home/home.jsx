//importamos de React los Hooks useState y useEffect
import { useState, useEffect } from "react";


//aca importamos el componente productCard
import ProductCard from "../../components/productCard";


//aca empezamos la funcion de la pagina
const Home = () => {

  //Logica
  //usamos el useState que lo empezamos como un array vacio
  // y sirve para guardar en el carrito y setear el carrito
  const [carrito, setCarrito] = useState([]);

  //empezamos con un array vacio y declaramos los productos y el seteo de productos
  const [productos, setProductos] = useState([]);

  //usando el hooks useEffect, que al tener un array vacio esta diciendo que se va a cargar
  //cada vez que se recargue la pagina.
  //empieza con una funcion flecha en donde estamos haciendo un fetch de una API y 
  //usamos el setProductos para acumular esa informacion en productos
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProductos(data));
  }, []);

  //funcion anonima en que los parametros son el producto a comprar y la cantidad,
  //usa el metodo find en el acumulado carrito
  const agregarCarrito = (producto, cantidad) => {
    const existente = carrito.find((item) => item.id === producto.id);

    if (existente) {
      setCarrito(
        carrito.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + cantidad }
            : item,
        ),
      );
    } else {
      setCarrito([...carrito, { ...producto, cantidad }]);
    }
  };

  //aca empezamos lo que es la experiencia del usuario
  return (
    //taildwind
    <div className="min-h-screen bg-gray-50 px-4 py-6 md:px-6 md:py-10">
      <h1 className="mb-6 text-center text-3xl font-bold tracking-[10px] text-gray-800 md:mb-10 md:text-4xl">
        Tienda Online
      </h1>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {productos.map((producto) => (
            <ProductCard
              key={producto.id}
              id={producto.id}
              nombre={producto.title}
              precio={producto.price}
              imagen={producto.image}
              onAgregar={(cantidad) => agregarCarrito(producto, cantidad)}
            />
        ))}
      </div>
    </div>
  );
};

export default Home;
