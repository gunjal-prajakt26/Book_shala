import { useContext } from "react"
import { DataContext } from "../Context/DataContext"
import { FilterContext } from "../Context/FilterContext";
import { ProductCard } from "./ProductCard";

export function Cart(){
    // const {filters:{cart}, setFilters}= useContext(FilterContext);
    return (
        <div>
            <h1>Cart Page</h1>
            <div>
            {/* {
            cart.map((obj)=>(<ProductCard key={obj._id} product={obj} />))
            } */}
            </div>
        </div>
    )
}