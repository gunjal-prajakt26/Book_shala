import {Link} from "react-router-dom"
import { AppFooter } from "./AppFooter";
import "./Home.css";
export function Home(){
    return (
        <div className="main-text">
           <img src="https://pustaka-react.netlify.app/static/media/home-img.839d5b46.jpg"/>
           <div className="content-text">
              <h4>
                Welcome to <span className="title">Boosk-Shala</span>,
              </h4>
              <div>
                <h1 className="main-text-title">For All Your</h1>
                <h1 className="main-text-title">Reading Needs</h1>
              </div>
              <Link to="/products">
                <button className="shop-now-btn">SHOP NOW</button>
              </Link>
              </div>
              <div className="footer-component">
      <AppFooter />
      </div>
            </div>
    )
}