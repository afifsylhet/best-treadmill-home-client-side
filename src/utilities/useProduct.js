import { useEffect, useState } from "react"


export const useProduct = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return [products];
}

export default useProduct;