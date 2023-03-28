import "./product.css";
import QuantityPicker from "./quantityPicker";
import { useEffect } from "react";
import { useState, useContext } from 'react' ;
import globalContext from "../state/globalContext";

function Product(props) {
   const [quantity, setQuantity] = useState(1);
   const addToCart = useContext(globalContext).addToCart;

    useEffect(function () {
    console.log("hey i'm a product");
},[]);

function onQuantityChange(qty) {
 console.log('new value: ' + qty);
 setQuantity(qty);
}

function getTotal() {
    let total = props.data.price * quantity;
    return total.toFixed(2);
}

function handleAddClick(){
    console.log("Adding to cart")

    letprodForCart = {...props.data};
    prodForCart.quantity = quantity;
    //prodfprcart["quantity"]=quantity;
    console.log(prodForCart);

    addToCart(prodForCart);
}

/**
 * create a new object called prodForCart
 * should be a copy of props.data
 * and you should add quantity
 */

return(
<div className="product">
    <h5>{props.data.title}</h5>

        <img src={"/images/" + props.data.image} alt=""/>

        <div className="prices">
            <label>Price ${props.data.price.toFixed(2)}</label>
            <label>Total $(getTotal())</label>
            <label>Cat{props.data.category}</label>
        </div>

<div className="controls">
    <QuantityPicker onChange={onQuantityChange}></QuantityPicker>
    <button onClick={handleAddClick} type="button" className="btn btn-primary">Add</button>
     </div>
</div>
    );

}



export default Product;