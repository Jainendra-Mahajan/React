import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStaus from "../utils/useOnlineStatus";

const Header = () => {

    const [login , setLogin] = useState("login");
    const onlineStatus = useOnlineStaus();
    return (
        <div className="header">
            <div className="logo-container">
                <Link to = "/"><img className="logo" src={LOGO_URL} alt="logo" /> </Link>
            </div>

            <div className="nav-items">
                <ul>
                    <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                    <li> <Link to = "/">Home</Link></li>
                    <li><Link to = "/about">About Us</Link></li>
                    <li><Link to = "/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={() => {
                        login === "login" ? 
                        setLogin("logout") : 
                        setLogin("login");
                    }}>{login}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;