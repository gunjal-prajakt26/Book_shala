import { useContext } from "react"
import { DataContext } from "../../Context/DataContext"
import { WishlistCard } from "./WishlistCard";

export function WishList(){
    const {items:{cart, wishlist}}= useContext(DataContext);
    return (
        <div>
            <h1>WishList Page</h1>
            <div className="cards">
            {
            wishlist.length > 0
            ?wishlist.map((obj)=>(<WishlistCard key={obj._id} product={obj} />))
            :(<p className="emty-msg">Your Wishlist Is Empty ! ☹️</p>)
            }
            </div>
        </div>
    )
}
