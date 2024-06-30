import "./Navbar.css"
import {NavLink} from "react-router-dom";
import logo from "../../images/logo.jpg"
import { IoSearchSharp } from "react-icons/io5";

const Navbar = () => {
    return (
        <div className="navbar">
            <nav className="nav">
                <img src={logo} alt="Logo"/>
                <div className="search">
                    <input type="text" placeholder="search"/>
                    <span><IoSearchSharp/></span>
                </div>
                <button>Nimadir</button>
            </nav>
        </div>
    )
}
export default Navbar


