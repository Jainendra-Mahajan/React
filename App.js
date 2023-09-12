/**
 <div id = "parent">
    <div id = "child">
        <h1>This is h1</h1>
        <h2>This is h2 </h2>
    </div>
 </div>

  <div id = "parent">
    <div id = "child">
        <h1>This is h1</h1>
        <h2>This is h2 </h2>
    </div>
 </div>
 */

// const heading = React.createElement("h1", // This will create element same as we create in JS but returns object.
//  {id: "heading", abc: "123"},
//   "Hello World from React"); 

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