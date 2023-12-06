import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "../src/components/Header";
import Body from "../src/components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter , RouterProvider , Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/userContext";

const AppComponent = () => {

    useEffect(() => {
        const data = {
            name : "Silent Killer"
        }
        setUserName(data.name);
    } , [])

    const [userName , setUserName] = useState();
    return (
        <div className="app">
            <UserContext.Provider value={{loggedInUser : userName , setUserName}}>
            <Header />
            <Outlet />
            </UserContext.Provider>
        </div>
    );
};

const router = createBrowserRouter(
    [
        {
            path : "/", 
            element: <AppComponent />,
            children : [
                {
                    path : "/", 
                    element: <Body />
                    } ,
                {
                    path : "/about", 
                    element: <About />,
                    } ,
        
                {
                    path : "/contact", 
                    element: <Contact />
                    },
                {
                    path : "/Restaurants/:resId", 
                    element: <RestaurantMenu />,
                    } 
            ],
            errorElement : <Error/>
            } 
        
 ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {router}/>);