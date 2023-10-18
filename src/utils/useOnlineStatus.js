import {useState } from "react";

const useOnlineStaus = () => {
    
    const [onlineStatus , setOnlineStaus] = useState(true);

    addEventListener("offline", () => {
        setOnlineStaus(false)
    });
    
    addEventListener("online", () => {
        setOnlineStaus(true)
    });

    return onlineStatus;
}

export default useOnlineStaus;