import { useContext, useState } from "react";
import { DataContext } from "../../Context/DataContext";
import "./couponModel.css"


export function CouponModel(){
    const [coupon, setCoupon]= useState(false);
    const {items:{cart}}= useContext(DataContext);

    const {price , discount}= cart.reduce(
        ({ price, discount }, item) => {
          price += item.originalPrice * item.qty;
          discount += (item.originalPrice - item.price) * item.qty;
          return { price, discount };
        },
        {
          price: 0,
          discount: 0,
        }
        );

        const couponDiscount=
        coupon
        ? Math.abs((parseFloat(price - discount) / 100) * 10)
        : 0;
      const totalAmt = parseFloat(price - discount -couponDiscount ).toFixed(2);
      const totalDiscount = parseFloat(discount - couponDiscount).toFixed(2);

      

    return (
        <div className="coupon-card">
            <div className="coupon-btn">
                <p>10% OFF Coupon?</p>
                <button disabled={coupon} onClick={()=>setCoupon(true)}>{coupon ?"Applied":"Apply"}</button>
            </div>
            <div className="coupon-title">
        <p>Price Details</p>
        </div>
        <div className="price-details">
          <li>
            <p>Price cart items</p>
            <p>₹ {price}</p>
          </li>
          <li>
            <p>Discount</p>
            <p>-₹ {discount}</p>
          </li>
          <li>
            <p>Delivery Charges</p>
            <p>FREE</p>
          </li>
          <li>
            <p>Coupon Discount</p>
            <p>
            ₹ {couponDiscount}
            </p>
          </li>
        </div>
        <div className="total-amount">
        <li>
            <p>Total Amount</p>
            <p>
            ₹ {totalAmt}
            </p>
          </li>
        </div>
        <div className="total-discount">
            <p>You will save ₹ {totalDiscount} on this order</p>
        </div>
        <div className="checkout-btn">
        <button>Checkout</button>
        </div>
        </div>
    )
}