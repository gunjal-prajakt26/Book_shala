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
      <Header className="header-component"/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Products/>}/>
          {/* <Route path="/cart" element={<Cart/>}/>
          <Route path="/whishList" element={<WhishList/>}/> */}
          <Route path="/mockman" element={<Mockman/>}/>
        </Routes>
      <AppFooter className="footer-component"/>
    </div>
  );
}

export default App;
