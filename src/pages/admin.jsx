import "./admin.css";
import {useState} from "react";
function Admin() {
    const[product, setProduct] = useState({});
    const [coupon, setCoupon] = useState({});


    function handleTextChange(e){
       const value = e.target.value;
       const name = e.target.name;
       product[name] = value;
       // 1  do not modify state vars 
       // - cretae a copy 
       // - modify the copy 
       // - set the copy back 
       let copy = {...product}; 
       copy[name] = value; 
       setProduct(copy); 
   }

   function handleCouponTextChange(e)
{
    const value = e.target.value;
    const name = e.target.name
}
   function saveProduct(){
    console.log(product);
   }

    return (
        <div className="admin">
            <h1> VIP access </h1>
       
       <main> 
<section id="products">
    <h5> Products </h5>


<form> 
    <div className="mb-3">
        <label className="form-label">Title</label> 
        <input type="title" onChange={handleTextChange} className="form-control"/> 
        </div>

        <div className="mb-3">
        <label className="form-label">Category</label> 
        <input type="category" onChange={handleTextChange} className="form-control"/> 
        </div>

        <div className="mb-3">
        <label className="form-label">Image name</label> 
        <input type="image" onChange={handleTextChange} className="form-control"/> 
        </div>

        <div className="mb-3">
        <label className="form-label">Image name</label> 
        <input type="price" onChange={handleTextChange} className="form-control"/> 
        </div>

        <div className="mb-3">
        <button className="btn btn-info"> Save Product</button> 
        </div>
 </form>       
</section>

<section id="coupons">
    <h5> Coupon codes</h5> </section>
</main>
</div>
)
}



/**
 * create the form 
 * create the state variable
 */

export default Admin;



