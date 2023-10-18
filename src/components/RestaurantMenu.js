import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

    const {resId} = useParams();
    const menuItem = useRestaurantMenu(resId);

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