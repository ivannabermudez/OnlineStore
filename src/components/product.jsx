import "./product.css";
import QuantityPicker from "./quantityPicker";
import { useEffect } from "react";
import { useState } from 'react' ;

function Product(props) {
   const [quantity, setQuantity] = useState(1);

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
}

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