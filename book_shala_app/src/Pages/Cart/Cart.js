import { useContext } from "react"
import { DataContext } from "../../Context/DataContext"
import { CartCard } from "./CartCard";
import "./Cart.css";

export function Cart(){
    const {items:{cart, wishlist}}= useContext(DataContext);
    return (
        <div>
            <h1>Cart Page</h1>
            <div className="cards">
            {
            cart.length > 0
            ?cart.map((obj)=>(<CartCard key={obj._id} product={obj} />))
            :<p className="emty-msg">Your Cart Is Empty ! ☹️</p>
            }
            </div>
        </div>
    )
}