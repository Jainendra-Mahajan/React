import ResCard,{withPromotedLabel} from "./ResCard";
import Shimmer from "./Shimmer";
import { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import { Restautant_List_URL } from "../utils/constants";
import useOnlineStaus from "../utils/useOnlineStatus";

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

    console.log(restaurantList);

    const RestaurantCardPromoted = withPromotedLabel(ResCard);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(Restautant_List_URL);
        const json = await data.json();

        setRestaurantList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setSearchData(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlineStatus = useOnlineStaus();

    if(onlineStatus === false) return <h1>Looks like you are offline ! Kindly check your internet Connection</h1>
 
    return restaurantList.length === 0 ? (
    <Shimmer />
    ) : (
        <div className="body m-4 p-4">
            <div className="filter flex">

                <input className="pl-3 mb-4 border border-solid "
                placeholder="Enter Restaurant Name"
                value={searchText}
                onChange={(e) => setsearchText(e.target.value)}/>

                <button className="ml-6 h-8 px-4 font-semibold rounded-md bg-black text-white"
                    onClick={() => { 
                       const data = filterData (searchText, restaurantList);
                       console.log(searchText);
                       setSearchData(data);
                }}>
                  search  
                </button>

                <button 
                    className="ml-4 mb-4 bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-2 rounded-lg" 
                    onClick={() => {
                        const filterData = restaurantList.filter(
                            (res) => res.info.avgRating > 4
                        );
                        setSearchData(filterData);
                    }}
                    > Top Rated Restaurants
                </button>
            </div>
            <div className="flex flex-wrap">

                {
                    searchData.map
                     (restaurant => <Link key={restaurant.info.id} to = {"/Restaurants/" + restaurant.info.id}><ResCard resData = {restaurant}/></Link>)
                }
            </div>
        </div>
    );
};

export default Body;