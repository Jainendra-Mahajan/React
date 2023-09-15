import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1" , {id: "heading"}, "Hello World from React");

// jsx --> React.createElement --> JS object --> HTML Element
const jsxHeading = <h1 id= "heading">  Hello World from JSX</h1>

const Title = () => (<h1>This is the title from another component</h1>)

const title = (<h1>This is title element</h1>);

//React component
const HeadingComponent = () => (
    <div>
        {title}
        <Title/>
        {Title()}
        <Title></Title>
        {/* All the three title above are of same use */}
        <h1>This is Heading Component</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
//This root is for DOM to connect it with JS.

root.render(<HeadingComponent/>);
//Taking heading and converting into HTML tag and render on root.