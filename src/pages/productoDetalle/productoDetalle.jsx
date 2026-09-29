import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom";

//importamos el componente contador
import Contador from "../../components/contador"


function ProductoDetalle () {

    const {id} = useParams()


    const [producto, setProducto] = useState(null)
    const [cantidad, setCantidad] = useState(1)
    const [mensaje, setMensaje] = useState("")

    useEffect(() => {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((response) => response.json())
        .then((data) => setProducto(data));
    }, [id]);

    const agregarAlCarrito = () => {
        if (cantidad > 0) {
            //por ahora solo mostramos un mensaje, despues lo conectamos al carrito
            setMensaje(`Agregaste ${cantidad} unidad(es) al carrito`)
            setCantidad(1)
            setTimeout(() => setMensaje(""), 3000)
        }
    }

    //mientras carga el producto mostramos un aviso
    if (!producto) {
        return (
            <div className="flex min-h-[60vh] items-center justify-center">
                <p className="animate-pulse text-lg text-gray-500">Cargando producto...</p>
            </div>
        )
    }

    return(
        <section className="mx-auto max-w-6xl px-4 py-10">
            <Link
                to="/products"
                className="mb-6 inline-block text-sm text-gray-500 transition-colors hover:text-amber-600"
            >
                ← Volver a productos
            </Link>

            <div className="grid gap-10 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:grid-cols-2 md:p-10">
                {/* imagen */}
                <div className="flex items-center justify-center rounded-2xl bg-gray-50 p-8">
                    <img
                        src={producto.image}
                        alt={producto.title}
                        className="h-72 w-full object-contain transition-transform duration-300 hover:scale-105 md:h-96"
                    />
                </div>

                {/* info */}
                <div className="flex flex-col gap-5">
                    <span className="w-fit rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-700">
                        {producto.category}
                    </span>

                    <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">
                        {producto.title}
                    </h1>

                    {producto.rating && (
                        <p className="text-sm text-gray-500">
                            <span className="text-amber-500">★</span> {producto.rating.rate} · {producto.rating.count} opiniones
                        </p>
                    )}

                    <p className="text-4xl font-bold text-amber-600">${producto.price}</p>

                    <p className="leading-relaxed text-gray-600">{producto.description}</p>

                    <hr className="border-gray-200" />

                    <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-700">Cantidad</span>
                        <Contador cantidad={cantidad} setCantidad={setCantidad} />
                    </div>

                    <button
                        onClick={agregarAlCarrito}
                        disabled={cantidad === 0}
                        className="w-full cursor-pointer rounded-xl bg-amber-600 py-3 text-lg font-semibold text-white shadow-md transition-colors enabled:hover:bg-amber-700 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        Agregar al carrito
                    </button>

                    {mensaje && (
                        <p className="rounded-xl bg-green-50 px-4 py-2 text-center text-sm font-medium text-green-700">
                            {mensaje}
                        </p>
                    )}
                </div>
            </div>
        </section>
    )
}

export default ProductoDetalle
