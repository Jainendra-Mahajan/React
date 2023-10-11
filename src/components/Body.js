import ResCard from "./ResCard";
import Shimmer from "./Shimmer";
import { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import { Restautant_List_URL } from "../utils/constants";

function filterData(searchText , restaurantList) {
    const data = restaurantList.filter((res) => 
        res.info.name.toLowerCase().includes(searchText.toLowerCase())
    )
    return data;
}

const Body = () => {
    const [searchText , setsearchText] = useState("");
    const [restaurantList , setRestaurantList] = useState([]);
    const [searchData , setSearchData] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(Restautant_List_URL);
    
        const json = await data.json();

        setRestaurantList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setSearchData(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
 
    return restaurantList.length === 0 ? (
    <Shimmer />
    ) : (
        <div className="body">
            <div className="filter">

                <input 
                placeholder="Enter Restaurant Name"
                value={searchText}
                onChange={(e) => setsearchText(e.target.value)}/>

                <button className="filter-btn" 
                    onClick={() => { 
                       const data = filterData (searchText, restaurantList);
                       console.log(searchText);
                       setSearchData(data);
                }}>
                  search  
                </button>

                <button 
                    className="filter-btn" 
                    onClick={() => {
                        const filterData = restaurantList.filter(
                            (res) => res.info.avgRating > 4
                        );
                        setSearchData(filterData);
                    }}
                    > Top Rated Restaurants
                </button>
            </div>
            <div className="card">

                {
                    searchData.map
                     (restaurant => <Link key={restaurant.info.id} to = {"/Restaurants/" + restaurant.info.id}><ResCard resData = {restaurant}/> </Link>)
                }
        
            </div>
        </div>
    );
};

export default Body;