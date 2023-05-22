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
      percentageOff,
    } = product;
  
    return (
      <div key={id} className="card">
        <img
          className="card-img"
          src={img}
          alt={name}
        />
        <div className="card-details">
        <h3 className="card-title-header" title={name}>
                {name}
              </h3>
              <p className="card-description">{author}</p>
              <div className="card-star">
                <p>{rating}</p>
              </div>
          <div className="price">
            <p className="disc-price">₹{price}</p>
            <p className="actual-price">₹{originalPrice}</p>
            <p className="price-percentage">({percentageOff}% OFF)</p>
          </div>
        <button>
         {"Add to Cart"}
        </button>
        </div>
      </div>
    );
  }
  