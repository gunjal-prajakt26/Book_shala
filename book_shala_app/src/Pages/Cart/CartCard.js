import { useContext } from "react";
import { DataContext } from "../../Context/DataContext";
import { useNavigate } from "react-router";
import "./CartCard.css";

export function CartCard({product}){

    const {items:{cart, wishlist},  addToWishlist,removeFromCart}= useContext(DataContext);

  const navigate= useNavigate();

    const {
        _id: id,
        img,
        name,
        author,
        price,
        originalPrice,
      } = product;
  
      const discount=Math.floor(((originalPrice-price)/ originalPrice)*100);
      
      const isInWishlist= wishlist.find(({_id})=>_id == id);
      const clickHandler=()=>{
        isInWishlist
        ?navigate("/wishList")
        :addToWishlist(product);
      }
      return (
        <div key={id} className="cart-product-card">
        <div className="cart-card">
        <div className="cart-img-container">
          <img
            className="cart-card-img"
            src={img}
            alt={name}
          />
          </div>
          <div className="cart-card-content">
        <div className="cart-card-info">
        <p className="cart-card-title-header" title={name}>
                {name}
              </p>
              <p className="cart-card-description">{author}</p>
              </div>
          <div className="price">
            <p className="disc-price"><b>₹{price}</b></p>
            <p className="actual-price"><b>₹{originalPrice}</b></p>
            <p className="price-percentage">({discount}% OFF)</p>
          </div>
          <div className="cart-qnty">
          <span className="qnty-btns"><i class="bi bi-dash-circle"></i></span>
          <span className="count"> a </span>
          <span className="qnty-btns"><i class="bi bi-plus-circle"></i></span>
          </div>
          </div>
          </div>
          <div className="card-btns">
            <span onClick={()=>removeFromCart(id)}>Remove</span>
            <span onClick={()=>clickHandler()}>{isInWishlist?"Go to Wishlist":"Move To Wishlist"}</span>
          </div>
        </div>
      );
    }
    