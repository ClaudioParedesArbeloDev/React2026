function Contador ({ cantidad, setCantidad }) {

    const incrementar = () => {
        setCantidad(cantidad + 1)
    }

    const decrementar = () => {
        if (cantidad > 0){
        setCantidad(cantidad - 1)
        }
    }


    return(
        <div className="flex items-center gap-4">
            <button
                onClick={decrementar}
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-gray-300 text-lg font-bold text-gray-600 transition-colors hover:border-amber-600 hover:bg-amber-50 hover:text-amber-600"
            >
                -
            </button>
            <p className="w-6 text-lg font-semibold text-gray-800">{cantidad}</p>
            <button
                onClick={incrementar}
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-gray-300 text-lg font-bold text-gray-600 transition-colors hover:border-amber-600 hover:bg-amber-50 hover:text-amber-600"
            >
                +
            </button>
        </div>
    )
}

export default Contador
