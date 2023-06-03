import "./couponModel.css"
export function CouponModel(){
    return (
        <div className="coupon-card">
            <div className="coupon-btn">
                <p>Apply Coupon?</p>
                <button>Apply</button>
            </div>
            <div className="coupon-title">
        <p>Price Details</p>
        </div>
        <div className="price-details">
          <li>
            <p>Price cart items</p>
            <p>₹ 123</p>
          </li>
          <li>
            <p>Discount</p>
            <p>-₹ 123</p>
          </li>
          <li>
            <p>Delivery Charges</p>
            <p>FREE</p>
          </li>
          <li>
            <p>Coupon Discount</p>
            <p>
              1234
            </p>
          </li>
        </div>
        <div className="total-amount">
        <li>
            <p>Total Amount</p>
            <p>
              1234
            </p>
          </li>
        </div>
        <div className="total-discount">
            <p>You will save ₹ 300.00 on this order</p>
        </div>
        <div className="checkout-btn">
        <button>Checkout</button>
        </div>
        </div>
    )
}