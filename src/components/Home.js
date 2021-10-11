import React from "react";
import { name, city } from "../data/data.js";

const headerStyle = {
  color: "firebrick"
}

function Home() {
  return(
    <div id="home">
      <h1 style={headerStyle}>Your {name} is a Web Developer from Your {city}</h1>
    </div>
  )
  
}

export default Home;
///nothing renders when saved 