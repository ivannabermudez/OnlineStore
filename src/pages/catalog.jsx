import Product from "../components/product"; //check
import "./catalog.css";
import { useEffect } from "react";
import  DataService from "../dataServices/dataService";
import { useState } from "react";

function Catalog() {
    const [products, setProducts] = useState([]); //initialvalue is an empty array
    const [category, setCategory] = useState ([]);
    const [prodsToDisplay, setProdsToDisplay] = useState([]);


//when the component loads, do something
useEffect(function () {
    // console.log("component loaded");
    loadCatalog();
},[]);

async function loadCatalog() {//get products from service 
let service = new DataService();
let prods = await service.getProducts();
console.log(prods);

setProducts(prods);
let cats=["sweeteners","Teas","milks","barista"];
setCategory(cats);

//when the product component is loaded console log "hello im a product"
}

function filter(category)
{
    console.log(category);

        let list=[];
        //find the products that match the category 
        //and add them to the list 

        for(let i=0; i<products.length; i++) {
            let prod = products[i];
            if(prod.category === category){
                list.push(prod);
            }
           setProdsToDisplay(list);
        }
}

function clearFilter(){
    setProdsToDisplay(products);
}
    return (
        <div className="catalog">
            <h1> Shop Our Variety of Organic Ingredients</h1>
        <h5>we have {products.length} new products</h5>
        <br></br>
        <button onClick={clearFilter} className="btn btn-dark btn-filter">
            All
        </button>

        {category.map((c)=> (
            <button 
            key={c}
          onClick={() => filter(c)}
          className="btn btn-success btn-filter">

            {c}
          </button>

        ))}
        <br></br>
        {prodsToDisplay.map((p) => (
            <Product key={p.id} data={p}></Product>
        ))}
        </div>
    );
        }
        
export default Catalog;


//create the product component with h5 for the title and
//render quantity picker 
//render 5 times that component
