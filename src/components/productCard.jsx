import Contador from "./contador"

function ProductCard ({...producto}) {

    
    return (
      <div className="border  w-50 text-center rounded-xl m-4">
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="w-full border-b-2"
        />
        <h3 className="text-xl uppercase">{producto.nombre}</h3>
        <p>{producto.precio}</p>
        <Contador />
        <button
          onClick={producto.onAgregar}
          className="bg-amber-600 p-2 rounded-xl text-blue-200 cursor-pointer"
        >
          Agregar al carrito
        </button>
      </div>
    );
}

export default ProductCard