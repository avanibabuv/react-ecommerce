import { useEffect, useState } from "react";
import { Link} from "react-router-dom";

function HomeCategories(){
    const [categories,setCategories] = useState([])
    useEffect(()=>{
            fetch("https://dummyjson.com/products/categories")
            .then(res=> res.json())
            .then(data=>setCategories(data))
        },[])


    return(
        <>
         <div className=" mb-12">
            <h2 className="text-cyan-800 mb-3 text-xl">Categories</h2>
            <div className="grid grid-cols-6 ">
                {
                    categories.map((d)=>
                       
                        <Link className=" border rounded hover:border-cyan-800 bg-neutral-primary focus:ring-4 focus:outline-none focus:ring-neutral-tertiary rounded-base text-base font-medium px-5 py-2.5 text-center me-3 mb-3 text-cyan-800" to={`category/${d.slug}`} key={d.slug}>{d.name}</Link>
                        
                    )
                }
            </div>
        </div>
        </>
    )
}

export default HomeCategories;