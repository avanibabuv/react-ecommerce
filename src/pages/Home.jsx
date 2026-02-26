import HomeCategories from "../components/HomeCategories";
import HomeProducts from "../components/HomeProducts";
import ProductsCard from "../components/ProductsCard";

function Home(){
    return(
        <section className="px-40 py-12">
        <HomeCategories/>
        <HomeProducts/>
        </section>
    )
}

export default Home