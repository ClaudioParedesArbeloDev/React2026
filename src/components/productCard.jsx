//importamos el useState
import { useState } from "react"
//importamos el link de react router dom
import { Link } from "react-router-dom";


//importamos el componente contador
import Contador from "./contador"


//empezamos la funcion del componente
function ProductCard ({...producto}) {


    const [cantidad, setCantidad] = useState(0)

    const agregar = () => {
        if (cantidad > 0) {
            producto.onAgregar(cantidad)
            setCantidad(0)
        }
    }

    return (
      <div className="flex w-full flex-col items-center gap-3 overflow-hidden rounded-2xl border border-gray-200 bg-white pb-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
        <Link to={`/product/${producto.id}`}>
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="h-48 w-full border-b border-gray-100 object-contain p-4 md:h-56"
          />
          <h3 className="line-clamp-2 px-4 text-sm font-semibold uppercase text-gray-800">
            {producto.nombre}
          </h3>
          <p className="text-xl font-bold text-amber-600">${producto.precio}</p>
        </Link>
        <Contador cantidad={cantidad} setCantidad={setCantidad} />
        <button
          onClick={agregar}
          disabled={cantidad === 0}
          className="cursor-pointer rounded-xl bg-amber-600 px-5 py-2 font-medium text-white transition-colors enabled:hover:bg-amber-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Agregar al carrito
        </button>
      </div>
    );
}

export default ProductCard