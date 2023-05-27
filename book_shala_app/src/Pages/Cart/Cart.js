import { useContext } from "react"
import { DataContext } from "../../Context/DataContext"
import { CartCard } from "./CartCard";
import "./Cart.css";

export function Cart(){
    const {items:{cart, wishlist}, setItems, addToCart, addToWishlist,removeFromCart, removeFromWishlist}= useContext(DataContext);
    return (
        <div>
            <h1>Cart Page</h1>
            <div className="cards">
            {
            cart.map((obj)=>(<CartCard key={obj._id} product={obj} />))
            }
            </div>
        </div>
    )
}