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
                <ul className="navs">
                    <li><NavLink to="/" >Home</NavLink></li>
                    <li><NavLink to="/singlePage" >Single</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}
export default Navbar


