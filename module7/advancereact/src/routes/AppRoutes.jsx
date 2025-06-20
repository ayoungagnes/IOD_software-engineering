import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import Home from "../components/Home";
import BitcoinRates from "../components/BitcoinRates";

function AppRoutes(props) {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Home {...props}></Home>}></Route>
        <Route path="/LoginForm" element={<LoginForm {...props}></LoginForm>}></Route>
        <Route path="/BitcoinRates" element={<BitcoinRates {...props}></BitcoinRates>}></Route>
      </Routes>
    </>
  );
}

export default AppRoutes;
