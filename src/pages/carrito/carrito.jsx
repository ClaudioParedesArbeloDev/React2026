import { Link } from "react-router-dom";

//importamos el hook del contexto del carrito
import { useCart } from "../../context/CartContext";

//reutilizamos el contador que ya usamos en el detalle del producto
import Contador from "../../components/contador";

const Carrito= () => {
  //sacamos del contexto todo lo que necesitamos para la pagina
  const {
    carrito,
    eliminarDelCarrito,
    cambiarCantidad,
    vaciarCarrito,
    totalItems,
    totalPrecio,
  } = useCart();

  //si el carrito esta vacio mostramos un aviso y un link para seguir comprando
  if (carrito.length === 0) {
    return (
      <section className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center">
        <i className="fa-solid fa-cart-shopping text-5xl text-gray-300"></i>
        <p className="text-lg text-gray-500">Tu carrito está vacío</p>
        <Link
          to="/"
          className="rounded-xl bg-amber-600 px-6 py-2 font-semibold text-white transition-colors hover:bg-amber-700"
        >
          Ir a comprar
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="mb-8 text-3xl font-bold text-gray-800">Tu carrito</h1>

      <div className="grid gap-8 md:grid-cols-3">
        {/* lista de productos */}
        <ul className="flex flex-col gap-4 md:col-span-2">
          {carrito.map((item) => (
            <li
              key={item.id}
              className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-20 w-20 shrink-0 object-contain"
              />

              <div className="flex flex-1 flex-col gap-2">
                <Link
                  to={`/product/${item.id}`}
                  className="line-clamp-2 font-medium text-gray-800 hover:text-amber-600"
                >
                  {item.title}
                </Link>
                <p className="text-sm text-gray-500">${item.price} c/u</p>

                {/* el contador espera setCantidad, le pasamos una funcion que actualiza el contexto */}
                <Contador
                  cantidad={item.cantidad}
                  setCantidad={(nueva) => cambiarCantidad(item.id, nueva)}
                />
              </div>

              <div className="flex flex-col items-end gap-3">
                <p className="font-bold text-amber-600">
                  ${(item.price * item.cantidad).toFixed(2)}
                </p>
                <button
                  onClick={() => eliminarDelCarrito(item.id)}
                  className="cursor-pointer text-gray-400 transition-colors hover:text-red-600"
                  aria-label="Quitar del carrito"
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </li>
          ))}
        </ul>

        {/* resumen de la compra */}
        <aside className="flex h-fit flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800">Resumen</h2>
          <p className="flex justify-between text-gray-600">
            <span>Productos</span>
            <span>{totalItems}</span>
          </p>
          <p className="flex justify-between text-lg font-bold text-gray-900">
            <span>Total</span>
            <span>${totalPrecio.toFixed(2)}</span>
          </p>
          <button className="w-full cursor-pointer rounded-xl bg-amber-600 py-3 font-semibold text-white transition-colors hover:bg-amber-700">
            Finalizar compra
          </button>
          <button
            onClick={vaciarCarrito}
            className="cursor-pointer text-sm text-gray-500 transition-colors hover:text-red-600"
          >
            Vaciar carrito
          </button>
        </aside>
      </div>
    </section>
  );
}

export default Carrito;
