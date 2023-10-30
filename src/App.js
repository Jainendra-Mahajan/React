import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../src/components/Header";
import Body from "../src/components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter , RouterProvider , Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";

const AppComponent = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
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