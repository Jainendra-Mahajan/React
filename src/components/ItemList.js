import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList =  ({ items }) => {

    //dispatcher fucntion writes data onto the store
    const dispatch = useDispatch(); 
    const handleAddItem = (item) => {
        //dispatch an action
        dispatch(addItem(item));
    }
    // console.log(items)
    return (
        <div>
            {items.map((item) => (
            <div data-testid= "fooditems" key={item.card.info.id} className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between">
                <div className="w-9/12 ">
                    <div className="my-4">
                        <span className="font-">{item.card.info.name}</span>
                        <span className="font-medium"> - ₹ {item?.card?.info?.price ? 
                        item.card.info.price / 100 : 
                        item.card.info.defaultPrice / 100}
                        </span>
                    </div>
                        <p className="text text-xs font-extralight">{item.card.info.description}</p>
                    </div>

                    <div className="w-3/12" >
                        <div className="absolute p-2 mx-10 rounded-lg bg-black text-white text-sm">
                            <button onClick={() => handleAddItem(item)}>Add New + </button>
                        </div>
                        <img src={CDN_URL + item.card.info.imageId}/>
                    </div>
                </div>

            ))}
        </div>
    )
}

export default ItemList;

