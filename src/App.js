import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Footer from "./component/footer/Footer";
import Home from "./component/home/Home";
import NavBar from "./component/nav/NavBar";
import { getCartItems } from "./features/cart/CartSlice";

function App() {


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

 
  return (
    <>
      <NavBar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
