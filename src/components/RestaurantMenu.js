import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {

    const {resId} = useParams();
    const menuItem = useRestaurantMenu(resId);
    const [showIndex , setShowIndex] = useState(null)

    if(menuItem === null) return <Shimmer/>

    const {name , cuisines , costForTwo} = menuItem?.cards[0]?.card?.card?.info;
    const categories = menuItem?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c?.card?.card?.["@type"] ===
     "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    //  console.log(categories);
    return (
        <div className="text-center my-4">
            <h1 className="font-bold ">{name}</h1>
            <p className="font-bold"> {cuisines.join(", ")} : Cost for TWO - {costForTwo/100}</p>

            {categories.map((category , index) => (
            <RestaurantCategory 
            key={category?.card?.card?.title} 
            data = {category?.card?.card}
            showItems = {index === showIndex && true}
            setShowIndex={() => setShowIndex(index)}
            />))}

        </div>
    )
}

export default RestaurantMenu;