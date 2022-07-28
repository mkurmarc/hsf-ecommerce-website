import ProductList from "./pages/ProductList";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Newsletter from "./components/Newsletter";
import { BrowserRouter, Link, Route, Routes} from "react-router-dom";


const App = () => {
  return( 
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/newsletter" element={<Newsletter />} />         
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;