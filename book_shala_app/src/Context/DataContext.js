import {createContext, useState, useEffect, useReducer} from "react";
import axios from "axios";
// import { initialData, DataReducerFun } from "../Reducer/DataReducerFunction";

export const DataContext = createContext();

const DataReducerFun=(state,{type,payLoad})=>{
    switch (type) {
        case "SET_PRODUCT_DATA":
                return {...state, productData:payLoad, data:payLoad };
            break;
        case "SET_CATEGORIES_DATA":
            return {...state, categories:payLoad};
            break;

        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart,payLoad],
              }
            break;

        case "REMOVE_FROM_CART":
            return {
                ...state, cart: state.cart.filter(({_id})=>_id!=payLoad)
            }
            break;
        
        case "REMOVE_FROM_WHISHLIST":
            return {
                ...state, wishlist: state.wishlist.filter(({_id})=>_id!=payLoad)
            }
            break;

        case "ADD_TO_WHISHLIST":
            return {
                ...state,
                wishlist: [...state.wishlist,payLoad],
              }
            break;
        default:
            return state;
            break;
    }
}


export function DataProvider({children}){

    const [isLoad, setIsLoad]= useState(true);
    const [isError, setIsError]= useState(false);
    const token= localStorage.getItem("encodedToken");
    const initialData = {productData:[],categories:[], cart:[], wishlist:[{
        _id: 1,
        img: "https://rukminim1.flixcart.com/image/612/612/kgwld3k0/book/1/9/4/rich-dad-poor-dad-original-imafxf885pytvycy.jpeg?q=70",
        name: "Rich Dad Poor Dad",
        author: "Robert Kiyoski",
        price: 350,
        originalPrice: 500,
        isBestSeller: false,
        category: "Non Fiction",
        rating: 2,
      }]}; 

    const [items, setItems] = useReducer(DataReducerFun, initialData);

    const addToCart= async ( productItem)=>{
        const responce= await fetch("/api/user/cart",{
            method:"POST",
            headers:{authorization: token},
            body:JSON.stringify({product:{productItem}}
            )
        })
      setItems({type:"ADD_TO_CART", payLoad:productItem});
    }

    const removeFromCart= async (productId)=>{
        const responce= await fetch(`/api/user/cart/:${productId}`,{
            method:"DELETE",
            headers:{authorization: token}
        })
            
        setItems({type:"REMOVE_FROM_CART", payLoad:productId})    
    }
    
    const addToWishlist= async ( productItem)=>{
        const responce= await fetch("/api/user/wishlist",{
            method:"POST",
            headers:{authorization: token},
            body:JSON.stringify({product:{productItem}}
            )
        })
      setItems({type:"ADD_TO_WHISHLIST", payLoad:productItem});
    }
    
    const removeFromWishlist= async (productId)=>{
        const responce= await fetch(`/api/user/wishlist/:${productId}`,{
            method:"DELETE",
            headers:{authorization: token}
        })
        setItems({type:"REMOVE_FROM_WHISHLIST", payLoad:productId})
    }
    
    
    useEffect(() => {
        (async () => {
            try {
              const dataResponse= await fetch("/api/products");
                  const list=await dataResponse.json();
                  setItems({type:"SET_PRODUCT_DATA", payLoad:list.products})
              
              const categoryResponse= await fetch("/api/categories", {method:"GET"});
                  const catgoryList = await categoryResponse.json();
                  setItems({type:"SET_CATEGORIES_DATA", payLoad:catgoryList.categories})
        
              setIsLoad(false);

            } catch (error) {
                setIsLoad(false);
                console.error(error)
                setIsError(true);
            }
          })();
    }, [])
    
    return (
        <>
            <DataContext.Provider value={{items, setItems, isError, isLoad, addToCart, addToWishlist, removeFromCart, removeFromWishlist}}>
                {children}
            </DataContext.Provider>
        </>
    )
} 
