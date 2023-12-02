import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data}) => {

    const [showItems , setShowItems] = useState(false);
    const [arrowDown , setArrowDown] = useState(true);

    const handleClick = () => {
        setShowItems(!showItems);
        setArrowDown(!arrowDown);
    }
return (
    <div className="w-6/12 mx-auto my-5 bg-gray-100 shadow-lg p-4 ">
        <div className="flex justify-between cursor-pointer"
        onClick={handleClick}
        >
            <span className="font-bold text-lg">
            {data.title} ({data?.itemCards?.length})
            </span>
            <span>{arrowDown ? "⬇️" : "⬆️"}</span>
        </div>

        <div>
            {showItems && <ItemList items = {data?.itemCards}/>}
        </div>

    </div>

)}


export default RestaurantCategory;