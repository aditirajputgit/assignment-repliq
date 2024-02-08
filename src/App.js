import { useState ,createContext, lazy, Suspense } from "react"
import "./app.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
const Home =lazy(()=> import("./pages/Home"))
const Shop =lazy(()=> import("./pages/Shop"))
const Cart =lazy(()=> import("./pages/Cart"))
const Login = lazy(()=>import("./pages/login"))
const ProductDetails =lazy(()=> import("./pages/ProductDetails"));
const RegisterForm = lazy(() => import("./pages/Register"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AdminDashBoard = lazy(() => import("./pages/Admin"));
export const DataContainer = createContext();

function App() {
  const [CartItem, setCartItem] = useState([])
  const [selectedProduct,setSelectedProduct]=useState(null);

  const addToCart = (product,num=1) => {
    const productExit = CartItem.find((item) => item.id === product.id)
    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + num } : item)))
    } else {
      setCartItem([...CartItem, { ...product, qty: num }])
    }
  }

  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    }
    else {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }

  const deleteProduct = (product)=> {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
  }


  return (
    <DataContainer.Provider
      value={{
        CartItem,
        setCartItem,
        addToCart,
        decreaseQty,
        deleteProduct,
        selectedProduct,
        setSelectedProduct,
      }}
    >
      <Suspense fallback={<Loader />}>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Shop />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/admin" element={<AdminDashBoard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </Suspense>
    </DataContainer.Provider>
  );
}

export default App
