import React from "react";
import ReactDOM from "react-dom/client";
//1-17-21
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://i.pinimg.com/originals/98/f1/ea/98f1ea009fdb4e2c57481028c6c5034d.png" alt="logo" />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const ResCard = (props) => {
    const {resname , menu , image} = props;
    return (
        <div className="res-card" style={{backgroundColor : "#f0f0f0"}}>
            <img 
            className="res-logo"
            src={image} alt="card-logo" />
            <h3 style={{margin:"auto"}}>{resname}</h3>
            <h4>Rating 4.5</h4>
            <h4>{menu}</h4>
            <h4>20 minutes</h4>
        </div>
    );
}
const Body = () => {
    return (
        <div className="body">
            <div className="search">search</div>
            <div className="card">
                <ResCard resname="Style Foods" menu="Misal , Idli , Vada" image="https://www.vegrecipesofindia.com/wp-content/uploads/2011/06/misal-pav-1v.jpg"/>
                <ResCard resname="KFC" menu="Chicken wings Fast Foods" image = "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xs/D-K303.jpg?ver=33.17"/>
                
            </div>
        </div>
    );
};

const AppComponent = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent/>);