import { useEffect } from "react";
import { useDispatch } from "react-redux";
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
    </>
  );
}

export default App;
