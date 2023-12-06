import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStaus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

const Header = () => {

    const [login , setLogin] = useState("login");
    const onlineStatus = useOnlineStaus();
    const {loggedInUser} = useContext(UserContext);
    return (
        <div className="flex justify-between bg-pink-200 shadow-lg">
            <div>
                <Link to = "/"><img className="w-52" src={LOGO_URL} alt="logo" /></Link>
            </div>

            <div className="nav-items">
                <ul className="flex m-4 p-4">
                    <li className="px-4 ">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                    <li className="px-4"> <Link to = "/">Home</Link></li>
                    <li className="px-4"><Link to = "/about">About Us</Link></li>
                    <li className="px-4"><Link to = "/contact">Contact Us</Link></li>
                    <li className="px-4">Cart</li>
                    <button className="login-btn" onClick={() => {
                        login === "login" ? 
                        setLogin("logout") : 
                        setLogin("login");
                    }}>{login}</button>
                    <li className="px-4 font-bold" >{loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
};


export default Header;