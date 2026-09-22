import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";


function ProductoDetalle () {

    const {id} = useParams()

    const [producto, setProducto] = useState({})

    useEffect(() => {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((response) => response.json())
        .then((data) => setProducto(data));
    }, [id]);

    return(
        <div>
            <img src={producto.image} alt={producto.title} />
            <p>{producto.title}</p>
        </div>
    )
}

export default ProductoDetalle