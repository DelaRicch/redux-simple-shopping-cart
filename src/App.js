import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Cart from "./component/cart/Cart";
import Home from "./component/home/Home";
import NavBar from "./component/nav/NavBar";
import { getCartItems } from "./features/cart/CartSlice";

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCartItems())
}, [])

  return (
    <>
    <NavBar />
    <Home />
    {/* <Cart /> */}
    </>
  );
}

export default App;
