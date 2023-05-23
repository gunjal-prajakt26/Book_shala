import "./ProductCard.css"
export function ProductCard({ product }) {
    
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
  
    return (
      <div key={id} className="card">
        <img
          className="card-img"
          src={img}
          alt={name}
        />
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
            <p className="price-percentage">(% OFF)</p>
          </div>
        <button className="cart-btn">
         {"Add to Cart"}
        </button>
        </div>
        
        {isBestSeller? (<p className="best-seeler-banner">BestSeller</p>):""}
        <p className="whishlist-icon"><i class="bi bi-heart-fill"></i></p>
      </div>
    );
  }
  