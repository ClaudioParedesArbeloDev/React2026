import { useState } from "react"

function Contador () {

    const [contador, setContador] = useState(0)

    const incrementar = () => {
        setContador(contador + 1)
    }

    const decrementar = () => {
        if (contador > 0){
        setContador(contador - 1)
        }
    }


    return(
        <div>
            <button onClick={decrementar}> - </button>
            <p>{contador}</p>
            <button onClick={incrementar}> + </button>
        </div>
    )
}

export default Contador