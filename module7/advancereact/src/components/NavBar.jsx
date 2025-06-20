import { NavLink } from "react-router-dom";

function NavBar() {
    return(
        <>
            <NavLink to="/">Home</NavLink>
        {" "} <NavLink to="/LoginForm">Login</NavLink>{" "} 
        <NavLink to="/BitcoinRates">BitcoinRates</NavLink>
        </>
    )
}
export default NavBar; 