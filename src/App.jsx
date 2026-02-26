import NavBar from "./components/NavBar"
import CategoryProducts from "./pages/CategoryProducts"
import Home from "./pages/Home"
import { Route,Routes } from "react-router-dom"
import Productdetail from "./pages/ProductDetail"
import SearchResult from "./pages/SearchResult"
import { ToastContainer } from "react-toastify"

function App() {


  return (
    <>
      <NavBar/>
      <ToastContainer/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="category/:slug" element={<CategoryProducts/>}/>
        <Route path="product/:id" element={<Productdetail/>}/>
        <Route path="search/:query" element={<SearchResult/>}/>
      </Routes>
      
    </>
  )
}

export default App
