import { useEffect, useState } from "react";
import { Menu_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {

    const [resInfo , setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = () => {
        const data = fetch(Menu_URL + resId);
        const json = data.json();
        setResInfo(json.data);
    }

    return resInfo;
}

export default useRestaurantMenu;