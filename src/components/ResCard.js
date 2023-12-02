import { CDN_URL } from "../utils/constants";

const ResCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId , name , avgRating, cuisines, costForTwo } = resData?.info
    const {deliveryTime} = resData?.info.sla
    return (
        <div className="m-4 p-4 w-52" style={{backgroundColor : "#f0f0f0"}}>
            <img 
            className="res-logo"
            src={CDN_URL + cloudinaryImageId} alt="card-logo" />
            <h3>{name}</h3>
            <h4>{"Rating : " + avgRating}</h4>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{"Avg Delivery Time " + deliveryTime}</h4>
        </div>
    );
};

//higher order function which adds promoted label to the card if promoted is present.
export const withPromotedLabel = (ResCard) => {
    return (props) => {
        return (
            <div>
                <label>Promoted</label>
                <ResCard {...props}/>
            </div>    
        );
    }
}

export default ResCard;