//importamos de React lo necesario para crear un contexto
import { createContext, useContext, useState } from "react";

//creamos el contexto, es como una "caja" global que cualquier componente puede abrir
const CartContext = createContext();

//el Provider es el componente que envuelve la app y reparte la informacion
export function CartProvider({ children }) {
  //el carrito ahora vive aca y no en Home, asi todos lo pueden usar
  const [carrito, setCarrito] = useState([]);

  //si el producto ya esta en el carrito le sumamos la cantidad,
  //si no esta lo agregamos con la cantidad elegida
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

  //filter devuelve un array nuevo sin el producto que queremos sacar
  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter((item) => item.id !== id));
  };

  //cambia la cantidad de un producto, si llega a 0 lo sacamos del carrito
  const cambiarCantidad = (id, cantidad) => {
    if (cantidad <= 0) {
      eliminarDelCarrito(id);
      return;
    }
    setCarrito(
      carrito.map((item) => (item.id === id ? { ...item, cantidad } : item)),
    );
  };

  //volvemos el carrito a un array vacio
  const vaciarCarrito = () => {
    setCarrito([]);
  };

  //sumamos todas las cantidades para mostrar en el icono del carrito
  const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0);

  //sumamos precio por cantidad de cada producto para el total a pagar
  const totalPrecio = carrito.reduce(
    (total, item) => total + item.price * item.cantidad,
    0,
  );

  //todo lo que pongamos en value queda disponible para los componentes hijos
  return (
    <CartContext.Provider
      value={{
        carrito,
        agregarCarrito,
        eliminarDelCarrito,
        cambiarCantidad,
        vaciarCarrito,
        totalItems,
        totalPrecio,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

//hook propio para no tener que importar useContext y CartContext en cada componente
export function useCart() {
  return useContext(CartContext);
}
