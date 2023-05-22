import "./Header.css";
import {Link} from "react-router-dom"
import { Navigate } from "react-router-dom";

export function Header() {
    
    return (
        <div className="app-header">
            <div className="app-title">
            <Link className="link" to="/"><h1>Book-Shala</h1></Link>
            </div>
            <div className="app-searchbar">
            <input id="searchBar" placeholder="Search Item" type="text"/>
            </div>
            <div className="app-features">
            <p><i class="bi bi-cart-check-fill"></i></p>
            <p><i class="bi bi-heart-fill"></i></p>
            <p><i class="bi bi-person-circle"></i></p>
            </div>
        </div>
    )
}