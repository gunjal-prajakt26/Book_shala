import "./Header.css";
import {Link} from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FilterContext } from "../Context/FilterContext";

export function Header() {
    const {filters,setFilters}= useContext(FilterContext);
    const [input, setInput] = useState("");

    return (
        <div className="app-header">
            <div className="app-title">
            <Link className="link" to="/"><h1>Book-Shala</h1></Link>
            </div>
            <div className="app-searchbar">
            <input id="searchBar" placeholder="Search Item" type="text" value={filters.searchInput} onChange={(e)=> setFilters({type:"SEARCH_BY_INPUT", payLoad:e.target.value})}/>
            </div>
            <div className="app-features">
            <p><Link className="link" to="/cart"><i class="bi bi-cart-check-fill"></i></Link></p>
            <p><Link className="link" to="/wishList"><i class="bi bi-heart-fill"></i></Link></p>
            <p><Link className="link" to="/profilePage"><i class="bi bi-person-circle"></i></Link></p>
            </div>
        </div>
    )
}