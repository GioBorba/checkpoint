import About from "./about";
import Contacts from "./contacts";
import Home from "./home";
import './style.css'


const Navbar = () => {
    return(
    <div className="navbar">
        <Home />
        <About />
        <Contacts />
    </div>
    )
}

export default Navbar;