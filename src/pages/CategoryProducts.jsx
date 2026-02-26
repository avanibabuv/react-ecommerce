import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ProductsCard from "../components/productsCard";

function CategoryProducts() {
    const { slug } = useParams()
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${slug}`)
            .then(res => res.json())
            .then(data => setProducts(data.products))
    }, [slug])

    return (
        <section className="px-40 py-12">
            <div className="mb-12">
                <h2 className="text-xl text-cyan-800 mb-3">Products-{slug}</h2>
                <div className="grid grid-cols-4 gap-6">
                    {
                        products.map((product) => (
                            <ProductsCard key={product.id} data={product} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default CategoryProducts