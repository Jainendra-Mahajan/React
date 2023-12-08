import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    //subscribe to store to read the data.
    const cartItems = useSelector((store) => store.cart.items)

    //To add data into the store we have to dispatch an action
    const dispatch = useDispatch();

    //call the Clear cart function
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
    <div className="text-center m-6 p-6 ">
        <button
            onClick={handleClearCart}  
            className="p-2 m-2 rounded-lg bg-black text-white">
                Clear Cart </button>
        <div className="w-6/12 m-auto">
            {cartItems.length === 0 && <h1>Please shop More to add Items</h1>}
            <ItemList items = {cartItems}/>
        </div>
    </div>
)}

export default Cart;