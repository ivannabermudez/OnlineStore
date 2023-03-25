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
    </div>
  );
}

export default About;
