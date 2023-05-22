import "./App.css";
import Mockman from 'mockman-js';
import { AppFooter } from "./Components/AppFooter";
import { Header } from "./Components/Header";
import {Routes, Route} from "react-router-dom";
import {Home} from "./Components/Home";
import { Products } from "./Pages/Products";

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
          {/* <Route path="/cart" element={<Cart/>}/>
          <Route path="/whishList" element={<WhishList/>}/> */}
          <Route path="/mockman" element={<Mockman/>}/>
        </Routes>
        </div>
        
    </div>
  );
}

export default App;
