import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { ProductCard } from "./ProductCard";
import "./Products.css";

export function Products() {

  const {data,  isError, isLoad, categories}= useContext(DataContext);
  return (
    <div className="Product-page">
    <div className="product-filters">
        <div className="filter-header">
        <h3>Filters</h3>
        <button>Clear</button>
        </div>
        <div className="price-slider">
            <label for="price">Price : ₹</label><br/>
            <input type="range" id="price" name="price" min="0" max="11"/>
        </div>
        <div className="category-filter">
        <p className="category-label">Category</p>
        <div className="categories">
        {categories.map((category)=>(
            <li>
            <input
            type="checkbox"
            value={category.categoryName}
          />{category.categoryName}</li>
        ))}
        </div>
        </div>
        <div className="rating-filter">
        <p className="rating-title">Ratings</p>
        <div className="radio-btn">
        <input type="radio" name="ratings" value="1"/>1 Stars & above<br/>
        <input type="radio" name="ratings" value="2"/>2 Stars & above<br/>
        <input type="radio" name="ratings" value="3"/>3 Stars & above<br/>
        <input type="radio" name="ratings" value="4"/>4 Stars & above
        </div>
        </div>
        <div className="sort-filter">
        <p>Sort By</p>
        <div className="sort-radio-btn">
        <input
            type="radio"
            name="sortByRadio"
            value="desc"
          />
          Price-High to Low
          <br/>
          <input
            type="radio"
            name="sortByRadio"
            value="asc"
          />
          Price - Low to High
        </div>
        </div>
    </div>
    <div className="product-cards">
        {isError? <h1>Error</h1>
      :isLoad?<h1>Loading</h1>
      :data.map((obj)=>(
        <ProductCard key={obj._id} product={obj} />
      ))
      }
    </div>
    </div>
  );
}
