import { useEffect, useState } from "react"


export const useProduct = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch("https://serene-fortress-61222.herokuapp.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return [products];
}

export default useProduct;