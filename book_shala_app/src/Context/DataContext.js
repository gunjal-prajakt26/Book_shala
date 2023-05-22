import {createContext, useState, useEffect, useReducer} from "react";

export const DataContext = createContext();


export function DataProvider({children}){

    const [data, setData]= useState([]);
    const [cartData, setCartData]= useState([]);
    const [categories, setCategories]= useState([]);
    const [isLoad, setIsLoad]= useState(true);
    const [isError, setIsError]= useState(false);
    const token= localStorage.getItem("encodedToken");

    const getData=async ()=>{
        try {
            const response= await fetch("/api/products");
            if(response.status===200){
                const list=await response.json();
                setData(list.products);
                setIsLoad(false)
            }
        } catch (error) {
            setIsLoad(false);
            console.error(error)
            setIsError(true);
        }
    }

    const getCategories=async()=> {
        const response = await fetch("/api/categories", {
            method:"GET"
        });
            const catgoryList = await response.json();
            setCategories(catgoryList.categories);
    }


    const getCartData=async()=> {
        
        const response = await fetch("/api/user/cart",{
            method: "GET",
            headers: {authorization : token}
        });
        const jsonData = await response.json();
        setCartData(jsonData.cart);
    }

    const products =
        {
          _id: 45,
          img: "https://rukminim1.flixcart.com/image/612/612/kwxv98w0/book/l/z/y/do-epic-shit-original-imag9gcfcwfvwtep.jpeg?q=70",
          name: "Do Epic Shit",
          author: "Ankur Warikoo",
          price: 219,
          originalPrice: 399,
          isBestSeller: true,
          category: "Self Help",
          rating: 4.6,
        };
    const postCartData=async(item)=> {
        const response = await fetch("/api/user/cart",{
            method: "POST",
            headers: {authorization : token,"Content-Type": "application/json"},
            body:JSON.stringify({product:item})
        });
        const data=await response.json()
        console.log(data);
    }
    
    // const deletteCartData=async(item, id)=> {
    //     const response = await fetch("/api/user/cart",{
    //         method: "POST",
    //         headers: {authorization : token,"Content-Type": "application/json"},
    //         body:JSON.stringify({product:item})
    //     });
    //     const data=await response.json()
    //     console.log(data);
    // }
    
    useEffect(() => {
      getData();
      getCategories();
      postCartData(products);
      getCartData();
    }, [])
    


    return (
        <>
            <DataContext.Provider value={{data, isError, isLoad, cartData, categories}}>
                {children}
            </DataContext.Provider>
        </>
    )
} 
