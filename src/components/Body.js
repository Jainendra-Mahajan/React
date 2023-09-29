import ResCard from "./ResCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
    const [restaurantList , setRestaurantList] = useState(resList);
    
    return (
        <div className="body">
            <div className="filter">
                <button 
                    className="filter-btn" 
                    onClick={() => {
                        const filterData = restaurantList.filter(
                            (res) => res.info.avgRating > 4
                        );
                        setRestaurantList(filterData);
                    }}
                    > Top Rated Restautants
                </button>
            </div>
            <div className="card">

                {
                    restaurantList.map(restaurant => <ResCard key={restaurant.info.id} resData = {restaurant}/>)
                }
        
            </div>
        </div>
    );
};

export default Body;