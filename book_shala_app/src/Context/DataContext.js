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
    const initialData = {productData:[],categories:[], cart:[], wishlist:[]}; 

    const [items, setItems] = useReducer(DataReducerFun, initialData);

    const addToCart= async ( productItem)=>{
        const responce= await fetch("/api/user/cart",{
            method:"POST",
            headers:{authorization: token},
            body:JSON.stringify({product:{productItem}}
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
    }
    
    const addToWishlist= async ( productItem)=>{
        const responce= await fetch("/api/user/wishlist",{
            method:"POST",
            headers:{authorization: token},
            body:JSON.stringify({product:{productItem}}
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
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
    
    console.log(items.wishlist)
    return (
        <>
            <DataContext.Provider value={{items, setItems, isError, isLoad, addToCart, addToWishlist}}>
                {children}
            </DataContext.Provider>
        </>
    )
} 
