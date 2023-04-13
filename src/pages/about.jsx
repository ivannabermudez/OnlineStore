import "./about.css";
import { useState } from "react";



function About() {
  const [displayEmail, setDisplayEmail] = useState(false);

  function toggleEmail() {
    console.log("hello");
    setDisplayEmail(true);
  }

  function setEmailSection() {
    if (displayEmail) {
      return <h5>ivanna@gmail.com</h5>;
    } else {
      return null;
    }
  }

  return (
    <div className="About">
      <i class="fa fa-shopping-cart" aria-hidden="true"></i>
      <h1>Ivanna Bermudez!</h1>
      {setEmailSection()}
      <button onClick={toggleEmail}> Show my Email</button>
      <h2> Welcome to the Barista Shop</h2>
<h5>Since 2023, The Barista Shop has supplied independent coffee shops and aims to make organic high quality products available for anyone who wishes to create great drinks that are full of flavor. 
Our mission is to be transparent about where our ingredients come from and to give back to the communities that provide you with these great ingridients. Everytime you shop with us, you are not only buying ethical made products, you are also contributing to the economy of the communities that make them. 
</h5>
    </div>

  );

}

export default About;
