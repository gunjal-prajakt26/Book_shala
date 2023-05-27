import "./App.css";
import Mockman from 'mockman-js';
import { Header } from "./Components/Header";
import {Routes, Route} from "react-router-dom";
import {Home} from "./Components/Home";
import { Products } from "./Pages/Products";
import { Cart } from "./Pages/Cart/Cart";
import { WishList } from "./Pages/Wishlist/WishList";
import { ProfilePage } from "./Pages/ProfilePage";

function App() {
  return (
    <div className="App">
    <div className="header-component">
      <Header />
      </div>
      <div className="app-body">
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/wishList" element={<WishList/>}/>
          <Route path="/profilePage" element={<ProfilePage/>}/>
          <Route path="/mockman" element={<Mockman/>}/>
        </Routes>
        </div>
        
    </div>
  );
}

export default App;
