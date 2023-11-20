import {Header} from "./components/Header.jsx";
import {Route, Routes} from "react-router-dom";
import {Home} from "./views/Home.jsx";
import {PageNotFound} from "./views/PageNotFound.jsx";
import {Pizza} from "./views/Pizza.jsx";
import {Footer} from "./components/Footer.jsx";
import {GlobalProvider} from "./context/global/GlobalProvider.jsx";
import {CartProvider} from "./context/cart/CartProvider.jsx";
import {Cart} from "./views/Cart.jsx";
import {Toaster} from "sonner";

const MammaMiaApp = () => {

  return (
    <>
      <GlobalProvider>
        <CartProvider>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/pizzas/:slugPizza" element={<Pizza/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/page-not-found" element={<PageNotFound/>}/>
            <Route path="*" element={<PageNotFound/>}/>
          </Routes>
          <Toaster richColors position="top-center" />
        </CartProvider>
        <Footer/>
      </GlobalProvider>
    </>
  )
}

export default MammaMiaApp
