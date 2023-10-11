import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Menu_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

    const [menuItem , setMenuItem] = useState(null);
    const {resId} = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const menuData = 
        await fetch(Menu_URL+ resId);

        const json = await menuData.json();
        setMenuItem(json.data);
    }

    if(menuItem === null) return <Shimmer />;

    const {name , cuisines , costForTwo} = menuItem?.cards[0]?.card?.card?.info;
    const menuCards  = menuItem?.cards[2]?.groupedCard?.cardGroupMap.REGULAR?.cards[2].card?.card.itemCards;
    
    return (
        <div>
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} : Cost for TWO - {costForTwo/100}</p>

            <h2>Menu</h2>
            <ul>
                {menuCards.map(item => <li key={item.card.info.id}>{item.card.info.name} : ₹ {(item.card.info.price || item.card.info.defaultPrice)/100}</li>)}
            </ul>
        </div>
    )
}

export default RestaurantMenu;