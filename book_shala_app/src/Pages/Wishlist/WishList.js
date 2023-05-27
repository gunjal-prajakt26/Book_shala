import { useContext } from "react"
import { DataContext } from "../../Context/DataContext"
import { WishlistCard } from "./WishlistCard";

export function WishList(){
    const {items:{cart, wishlist}, setItems, addToCart, addToWishlist,removeFromCart, removeFromWishlist}= useContext(DataContext);
    return (
        <div>
            <h1>WishList Page</h1>
            <div className="cards">
            {
            wishlist.map((obj)=>(<WishlistCard key={obj._id} product={obj} />))
            }
            </div>
        </div>
    )
}
