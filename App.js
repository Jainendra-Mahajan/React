import React from "react";
import ReactDOM from "react-dom/client";

const heading = [React.createElement("div", {id: "parent"}, 
React.createElement("div", {id: "child"}, 
[React.createElement("h1", {}, "This is h1"), React.createElement("h2", {}, "This is h2")])
),

React.createElement("div", {id: "parent"}, 
React.createElement("div", {id: "child"}, 
[React.createElement("h1", {}, "This is h1"), React.createElement("h2", {}, "This is h2")])
)];

const root = ReactDOM.createRoot(document.getElementById("root"));
//This root is for DOM to connect it with JS.

root.render(heading);
//Taking heading and converting into HTML tag and render on root.