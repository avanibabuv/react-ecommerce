import { useEffect, useState } from "react"
import ProductsCard from "./ProductsCard"

function HomeProducts(){

    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch("https://dummyjson.com/products")
        .then(res=>res.json())
        .then(data=>setProducts(data.products))
    },[])
    return(
        <div>
            <h2 className="text-cyan-800 mb-2 text-xl">Products</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm ">
                {
                    products.map((product)=>(
                        <ProductsCard key={product.id} data={product}/>
                    ))
                }
            </div>

        </div>
    )
}

export default HomeProducts