import ProductCard from "../../components/productCard"
import { useState, useEffect } from "react"


const Home = () => {
    
    const [carrito, setCarrito] = useState([]);
    const [productos, setProductos]= useState([])

    
    useEffect (() => {
        fetch("https://fakestoreapi.com/products")
          .then((response) => response.json())
          .then((data) => setProductos(data));
      }, []);



    const agregarCarrito = (producto, cantidad) => {
        const existente = carrito.find((item) => item.id === producto.id)

        if (existente) {
            setCarrito(carrito.map((item) =>
                item.id === producto.id
                    ? { ...item, cantidad: item.cantidad + cantidad }
                    : item
            ))
        } else {
            setCarrito([...carrito, { ...producto, cantidad }])
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-6 md:px-6 md:py-10">
            <h1 className="mb-6 text-center text-3xl font-bold tracking-tight text-gray-800 md:mb-10 md:text-4xl">
                Tienda Online
            </h1>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {productos.map((producto) => (
                    <ProductCard
                        key={producto.id}
                        nombre={producto.title}
                        precio={producto.price}
                        imagen={producto.image}
                        onAgregar={(cantidad)=>agregarCarrito(producto, cantidad)}
                    />
                ))}

            </div>
        </div>
    )
}


export default Home
