import react from "react";
import "./App.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from "react-router-dom";
import Home from "./component/pages/Home";
import Collection from "./component/pages/Collection";
import About from "./component/pages/About";
import Contact from "./component/pages/Contact";
import Product from "./component/pages/Product";
import Cart from "./component/pages/Cart";
import Login from "./component/pages/Login";
import PlaceOrder from "./component/PlaceOrder";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Searchbar from "./component/Searchbar";
import OrderConfirmation from "./component/OrderConfirmation";
import AllOrders from "./component/AllOrders";
function App() {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer/>
      <Navbar/>
      <Searchbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Collection" element={<Collection />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Product/:productId" element={<Product />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
      <Route path="/order-confirmation" element={<OrderConfirmation />} />
      <Route path="/AllOrders" element={<AllOrders />} />


      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
