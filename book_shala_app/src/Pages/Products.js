import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { ProductCard } from "./ProductCard";

export function Products() {

  const {data,  isError, isLoad}= useContext(DataContext);
  console.log(data);
  return (
    <div>
        {isError? <h1>Error</h1>
      :isLoad?<h1>Loading</h1>
      :data.map((obj)=>(
        <ProductCard key={obj._id} product={obj} />
      ))
      }
    </div>
  );
}
