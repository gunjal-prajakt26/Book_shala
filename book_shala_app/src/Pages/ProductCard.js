import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { useNavigate } from "react-router";
import "./ProductCard.css"

export function ProductCard({ product }) {

  const {items:{cart, wishlist}, setItems, addToCart, addToWishlist,removeFromCart, removeFromWishlist}= useContext(DataContext);

  const navigate= useNavigate();
    const {
      _id: id,
      img,
      name,
      author,
      price,
      originalPrice,
      isBestSeller,
      rating,
    } = product;

    const discount=Math.floor(((originalPrice-price)/ originalPrice)*100);
  
    const isInCart=cart.includes(product);
    const addToCartHandler=()=>{
      isInCart
      ?navigate("/cart")
      :addToCart(product);
    }
    
    const isInWishlist= wishlist.find(({_id})=>_id == id);
    const addToWishlistHandler=()=>{
      isInWishlist
      ?removeFromWishlist(id)
      :addToWishlist(product);
    }
    return (
      <div key={id} className="card">
      <div className="img-container">
        <img
          className="card-img"
          src={img}
          alt={name}
        />
        <p className="whishlist-icon"><i class="bi bi-suit-heart-fill" style={{color:isInWishlist?"red":"gray"}} onClick={()=>addToWishlistHandler()}></i></p>
        </div>
        <div className="card-content">
        <div className="card-details">
        <div className="card-info">
        <p className="card-title-header" title={name}>
                {name}
              </p>
              <p className="card-description">{author}</p>
              </div>
              <div className="card-star">
                <p><i class="bi bi-star-fill"></i> {rating} </p>
              </div>
          </div>
          <div className="price">
            <p className="disc-price"><b>₹{price}</b></p>
            <p className="actual-price"><b>₹{originalPrice}</b></p>
            <p className="price-percentage">({discount}% OFF)</p>
          </div>
        <button className="cart-btn" onClick={()=>addToCartHandler()}>{isInCart?"Go to Cart":"Add to Cart"}</button>
        </div>
        
        {isBestSeller? (<p className="best-seeler-banner">BestSeller</p>):""}
        
      </div>
    );
  }
  