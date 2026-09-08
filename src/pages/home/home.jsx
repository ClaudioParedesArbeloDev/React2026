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



    const agregarCarrito = (producto) => {
        setCarrito([...carrito, producto])
    }

    return (
        <div>
            <h1>Tienda Online</h1>
            <div className="flex flex-wrap">
                {productos.map((producto) => (
                    <ProductCard
                        key={producto.id}
                        nombre={producto.title}
                        precio={producto.price}
                        imagen={producto.image}
                        onAgregar={()=>agregarCarrito(producto)}
                    />
                ))}

            </div>
        </div>
    )
}


export default Home
