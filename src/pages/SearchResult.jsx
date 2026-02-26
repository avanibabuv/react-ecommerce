import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ProductsCard from "../components/productsCard"

function SearchResult() {
    const params = useParams()
    const [products,setProducts] = useState([])
    useEffect(() => {
        fetch(`https://dummyjson.com/products/search?q=${params.query}`)
            .then(res => res.json())
            .then(data=>setProducts(data.products));
    }, [params.query])
    return (

        <section className="px-28 py-12">
            <h2 className="text-cyan-600 mb-1 text-xl">Search Results</h2>
            <h3 className="text-cyan-600 mb-3 text-md">{params.query}</h3>
            <div className="grid grid-cols-4 gap-2 text-sm ">
                {
                    products.map((product)=>(
                        <ProductsCard key={product.id} data={product}/>
                    ))
                }
            </div>
        </section>

    )
}

export default SearchResult