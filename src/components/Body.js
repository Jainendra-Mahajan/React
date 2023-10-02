import ResCard from "./ResCard";
import { useState } from "react";
import resList from "../utils/mockData";


function filterData(searchText , restaurantList) {
    const data = restaurantList.filter((res) => 
        res.info.name.toLowerCase().includes(searchText.toLowerCase())
    )
    return data;
}
const Body = () => {
    const [searchText , setsearchText] = useState("");
    const [restaurantList , setRestaurantList] = useState(resList);
    
    return (
        <div className="body">
            <div className="filter">

                <input 
                placeholder="Enter Restaurant Name"
                value={searchText}
                onChange={(e) => setsearchText(e.target.value)}/>

                <button className="filter-btn" 
                    onClick={() => { const data = filterData (searchText, restaurantList);
                        if(data.length > 0) setRestaurantList(data);
                        else setRestaurantList(resList);
                }}>
                  search  
                </button>

                <button 
                    className="filter-btn" 
                    onClick={() => {
                        const filterData = restaurantList.filter(
                            (res) => res.info.avgRating > 4
                        );
                        setRestaurantList(filterData)
                    }}
                    > Top Rated Restaurants
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